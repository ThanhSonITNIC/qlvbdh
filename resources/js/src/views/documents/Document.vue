<template>
  <div>
    <CDetail :documentId.sync="documentId" @update="onUpdateDetail" />
    <CAttachments :documentId.sync="documentId" />
    <CReceivers v-if="!isDocumentOutcome" :documentId.sync="documentId" />
    <CRecipients v-if="isDocumentOutcome" :documentId.sync="documentId" />
  </div>
</template>

<script>
import services from "../../services/factory";
import CDetail from "../../components/document/Detail";
import CAttachments from "../../components/document/Attachments";
import CReceivers from "../../components/document/TreeReceivers";
import CRecipients from "../../components/document/Recipients";

export default {
  name: "Document",
  components: {
    CDetail,
    CAttachments,
    CReceivers,
    CRecipients
  },
  data() {
    return {
      documentId: "",
      document: {}
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.document) {
          this.documentId = route.params.document;
        }
      }
    },
    documentId: {
      handler() {
        this.$router.push({ path: `/documents/${this.documentId}` });
      }
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const documentResponse = await services.document.get(this.documentId);
      this.document = documentResponse.data;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
    onUpdateDetail(document) {
      this.document = document;
    }
  },
  computed: {
    isDocumentOutcome() {
      return this.document.book_id == 2;
    }
  }
};
</script>
