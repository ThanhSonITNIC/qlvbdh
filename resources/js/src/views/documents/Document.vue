<template>
  <div>
    <CDetail :documentId.sync="documentId" />
    <CAttachments :documentId.sync="documentId" />
    <CReceivers :documentId.sync="documentId" />
  </div>
</template>

<script>
import services from "../../services/factory";
import CDetail from "../../components/document/Detail";
import CAttachments from "../../components/document/Attachments";
import CReceivers from "../../components/document/TreeReceivers";

export default {
  name: "Document",
  components: {
    CDetail,
    CAttachments,
    CReceivers,
  },
  data() {
    return {
      documentId: "",
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
    },
  },
  created() {
    
  },
  methods: {
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
  }
};
</script>
