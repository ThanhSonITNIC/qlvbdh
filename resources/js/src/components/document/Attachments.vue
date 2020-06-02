<template>
  <CCard>
    <CCardHeader>
      <strong>Tệp đính kèm</strong>
    </CCardHeader>
    <CCardBody>
      <CDataTable :loading="loading" :items="attachments" :fields="fields">
        <template #id="{item, index}">
          <td>
            <CButton size="sm" @click="downloadAttachment(item)" variant="outline" color="primary">
              <CIcon name="cil-cloud-download" />
            </CButton>
            <CButton
              size="sm"
              @click="deleteAttachment(item.id, index)"
              variant="outline"
              color="danger"
            >
              <CIcon name="cil-remove" />
            </CButton>
          </td>
        </template>
      </CDataTable>
      <CInputFile custom v-on:change="handleFileUpload" />
    </CCardBody>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Attachments",
  props: {
    documentId: {
      required: true
    }
  },
  data() {
    return {
      loading: true,
      fields: [
        { key: "name", label: "Tên", _classes: "w-50" },
        { key: "size", label: "Kích thước (KB)" },
        { key: "id", label: "Hành động" }
      ],
      attachments: [
        {
          id: "",
          name: "",
          size: ""
        }
      ],
      file: {}
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const attachmentResponse = await services.attachment.all(
        `search=document_id:${this.documentId}`
      );
      this.attachments = this.formatKeys(attachmentResponse.data, {
        id: "id",
        name: "name"
      });
      this.loading = false;
    },
    downloadAttachment(item) {
      services.attachment
        .download(item.id, item.name)
        .then(response => {
          this.$toast.open({ message: "Đã tải xuống", type: "success" });
        })
        .catch(error => {
          this.$toast.open({
            message: error.response.data.message,
            type: "error"
          });
        });
    },
    deleteAttachment(id, index) {
      services.attachment
        .delete(id)
        .then(response => {
          this.attachments.splice(index, 1);
          this.$toast.open({ message: "Đã xóa", type: "success" });
        })
        .catch(error => {
          this.$toast.open({
            message: error.response.data.message,
            type: "error"
          });
        });
    },
    handleFileUpload(files, e) {
      this.file = files[0];
      this.uploadAttachment();
    },
    uploadAttachment() {
      let formData = new FormData();
      formData.append("attachments", this.file);
      formData.append("document_id", this.documentId);
      services.attachment
        .create(formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.attachments.push(response.data);
          this.$toast.open({ message: "Đã tải lên", type: "success" });
        })
        .catch(error => {
          this.$toast.open({
            message: error.response.data.message,
            type: "error"
          });
        });
    }
  }
};
</script>
