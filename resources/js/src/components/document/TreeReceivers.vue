<template>
  <CCard>
    <CCardHeader>
      <strong>Người nhận</strong>
    </CCardHeader>
    <CCardBody>
      <CRow class="form-group">
        <CCol sm="6">
          <label>Chọn xem</label>
          <treeselect
            @select="addViewer"
            @deselect="removeViewer"
            v-model="viewers"
            :multiple="true"
            :options="viewerOptions"
            :clearable="false"
          ></treeselect>
        </CCol>
        <CCol sm="6">
          <label>Chọn xử lý</label>
          <treeselect
            @select="onHandlerSelected"
            @deselect="onHandlerDeselected"
            v-model="handlers"
            :multiple="true"
            :options="handlerOptions"
            :clearable="false"
          ></treeselect>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Receivers",
  props: {
    documentId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      // define the default value
      viewers: [],
      handlers: [],
      // define options
      viewerOptions: [],
      handlerOptions: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.fetchDepartments(), this.fetchViewers(), this.fetchHandlers();
    },
    async fetchDepartments() {
      const departmentResponse = await services.department.all("with=users");
      const departments = this.formatKeys(departmentResponse.data, {
        id: "id",
        name: "label"
      });
      this.viewerOptions = this.formatDepartmentForTree(departments);
      return departments;
    },
    async fetchViewers() {
      const receivers = await this.fetchReceivers();
      this.viewers = receivers.map(receiver => receiver.user_id);
      return receivers;
    },
    async fetchReceivers() {
      const receiversResponse = await services.receiver.all(this.viewerQuery);
      const receivers = this.formatReceiverForTree(receiversResponse.data);
      this.handlerOptions = receivers;
      return receivers;
    },
    async fetchHandlers() {
      const handleReceiversResponse = await services.receiver.all(
        this.hanlderQuery
      );
      const handleReceivers = this.formatReceiverForTree(
        handleReceiversResponse.data
      );

      this.handlers = handleReceivers.map(receiver => receiver.id);

      return handleReceivers;
    },
    removeViewer(item) {
      services.receiver
        .deletes(
          `document_id=${this.documentId}&${
            item.children ? "department_id" : "user_id"
          }=${item.id}`
        )
        .then(response => {
          this.fetchReceivers();
          this.fetchHandlers();
        });
    },
    addViewer(item) {
      services.receiver
        .creates({
          ...{ [item.children ? "department_id" : "user_id"]: item.id },
          document_id: this.documentId
        })
        .then(response => {
          this.fetchReceivers();
        });
    },
    onHandlerDeselected(item) {
      services.receiver.update({ view_only: true }, item.id);
    },
    onHandlerSelected(item) {
      services.receiver.update({ view_only: false }, item.id);
    },
    formatReceiverForTree(array, keysMap = { id: "id" }) {
      return array.map(function(obj) {
        const receiver = Object.keys(obj).reduce(
          (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
          }),
          {}
        );
        receiver.label = receiver.user.name;
        return receiver;
      });
    },
    formatDepartmentForTree(array, keysMap = { users: "children" }) {
      return array.map(function(obj) {
        const department = Object.keys(obj).reduce(
          (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
          }),
          {}
        );
        department.children = this.formatKeys(department.children, {
          id: "id",
          name: "label"
        });
        return department;
      }, this);
    }
  },
  computed: {
    viewerQuery() {
      return `search=document_id:${this.documentId}&with=user`;
    },
    hanlderQuery() {
      return `search=document_id:${this.documentId};view_only:false&with=user&searchJoin=and`;
    }
  },
  watch: {}
};
</script>
