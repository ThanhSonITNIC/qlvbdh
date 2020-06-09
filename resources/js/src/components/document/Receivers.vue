<template>
  <CCard>
    <CCardHeader>
      <strong>Người nhận</strong>
      <CButton size="sm" class="float-right" color="primary" variant="outline">
        <CIcon name="cil-plus" />
      </CButton>
    </CCardHeader>
    <CCardBody>
      <CCardBody class="p-0">
        <CDataTable
          :loading="loading"
          :items="receivers"
          :fields="fields"
          :sorter="{ external: true, resetable: true }"
          @update:sorter-value="sorted"
        >
          <template #user="{item}">
            <td>{{item.user.name}}</td>
          </template>
          <template #view_only="{item}">
            <td>
              <CSelect
                class="mb-0"
                :value.sync="item.view_only"
                :options="functions"
                @update:value="(value) => updateViewOnly(item.id, value)"
                placeholder="Please select"
              />
            </td>
          </template>
          <template #seen="{item}">
            <td>
              <CSwitch class="mx-1" color="info" :checked="item.seen" variant="outline" disabled />
            </td>
          </template>
          <template #done="{item}">
            <td>
              <CSwitch
                class="mx-1"
                color="success"
                :checked.sync="item.done"
                variant="outline"
                @update:checked="(value) => updateDone(item.id, value)"
              />
            </td>
          </template>
          <template #id="{item, index}">
            <td>
              <CButton size="sm" @click="remove(item, index)" variant="outline" color="danger">
                <CIcon name="cil-remove" />
              </CButton>
            </td>
          </template>
        </CDataTable>
        <CPagination
          v-if="pages > 1"
          align="center"
          :pages="pages"
          :active-page.sync="currentPage"
          :activePage="currentPage"
        />
      </CCardBody>
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Receivers",
  props: {
    documentId: {
      required: true
    }
  },
  data() {
    return {
      loading: true,
      fields: [
        { key: "user", label: "Người nhận", sorter: false },
        { key: "view_only", label: "Chức năng", _classes: "w-25" },
        { key: "seen", label: "Đã xem" },
        { key: "done", label: "Đã xử lý" },
        { key: "id", label: "Xóa", sorter: false }
      ],
      receivers: [],
      activeTab: 0,
      departments: [],
      roles: [],
      currentPage: 1,
      pages: 0,
      functions: [
        { value: true, label: "Chỉ xem" },
        { value: false, label: "Xử lý" }
      ],
      sorter: {
        column: "",
        asc: true
      }
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.loading = true;

      const departmentResponse = await services.department.all();
      this.departments = departmentResponse.data;

      const roleResponse = await services.role.all();
      this.roles = roleResponse.data;

      this.fetchReceivers();

      this.loading = false;
    },
    async fetchReceivers() {
      this.loading = true;
      const response = await services.receiver.all(this.query);
      this.receivers = response.data.data;
      this.currentPage = response.data.current_page;
      this.pages = response.data.last_page;
      this.loading = false;
    },
    sorted(sorter) {
      this.sorter = sorter;
      this.fetchReceivers();
    },
    updateViewOnly(id, value) {
      services.receiver
        .update({ view_only: value }, id)
        .then(response => {
          this.$toast.success("Đã cập nhật");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    updateDone(id, value) {
      services.receiver
        .update({ done: value }, id)
        .then(response => {
          this.$toast.success("Đã cập nhật");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
    remove(receiver, index) {
      services.receiver
        .delete(receiver.id)
        .then(response => {
          this.receivers.splice(index, 1);
          this.$toast.success("Đã xóa");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  },
  computed: {
    query() {
      return this.withQuery + "&" + this.pageQuery + "&" + this.searchQuery + "&" + this.sortedQuery;
    },
    pageQuery() {
      return (this.currentPage ? "page=" + this.currentPage : "") + "&limit=10";
    },
    withQuery() {
      return "with=user";
    },
    sortedQuery() {
      return this.sorter.column
        ? `orderBy=${this.sorter.column}&sortedBy=${
            this.sorter.asc ? "asc" : "desc"
          }`
        : "";
    },
    searchQuery() {
      return `search=document_id:${this.documentId}`;
    }
  },
  watch: {
    currentPage: {
      handler(page) {
        this.fetchReceivers();
      }
    }
  }
};
</script>
