<template>
  <CCard>
    <CCardHeader>
      <strong>Nơi nhận</strong>
    </CCardHeader>
    <CCardBody>
      <CRow class="form-group">
        <CCol sm="12">
          <treeselect
            v-model="organizes"
            :multiple="true"
            :options="organizeOptions"
            :clearable="false"
            @select="addRecipient"
            @deselect="removeRecipient"
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
  name: "Recipients",
  props: {
    documentId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      // define the default value
      organizes: [],
      // define options
      organizeOptions: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.fetchOrganizes();
      this.fetchRecipients();
    },
    async fetchOrganizes() {
      const organizesResponse = await services.publisher.all();
      const organizes = this.formatKeys(organizesResponse.data, {
        id: "id",
        name: "label"
      });
      this.organizeOptions = organizes;
      return organizes;
    },
    async fetchRecipients() {
      const recipientResponse = await services.recipient.all(
        `search=document_id:${this.documentId}`
      );
      this.organizes = recipientResponse.data.map(
        recipient => recipient.organize_id
      );
      return recipientResponse;
    },
    addRecipient(item) {
      services.recipient
        .create({
          organize_id: item.id,
          document_id: this.documentId
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    removeRecipient(item) {
      services.recipient
        .deletes(`document_id=${this.documentId}&organize_id=${item.id}`)
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
