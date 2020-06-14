<template>
  <CCard>
    <CCardHeader>
      <strong>Chi tiết văn bản</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow class="form-group">
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Sổ văn bản"
              :options="books"
              :value.sync="document.book_id"
              placeholder="Please select"
            />
          </CCol>
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Loại văn bản"
              :options="types"
              :value.sync="document.type_id"
              placeholder="Please select"
            />
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CInput label="Số ký hiệu" :value.sync="document.symbol" class="mb-0" />
          </CCol>
          <CCol sm="6">
            <CInput label="Người soạn" :value="document.creator.name" readonly class="mb-0" />
          </CCol>
        </CRow>
        <CTextarea
          label="Trích dẫn"
          placeholder="Content..."
          rows="5"
          :value.sync="document.abstract"
        />
        <CRow class="form-group">
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Nơi ban hành"
              placeholder="Please select"
              :options="publishers"
              :value.sync="document.publisher_id"
            />
          </CCol>
          <CCol sm="6">
            <CInput
              label="Ngày ban hành"
              type="date"
              :value.sync="document.published_at"
              class="mb-0"
            />
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CSelect
              class="mb-0"
              label="Người ký"
              :options="signers"
              :value.sync="document.signer_id"
              placeholder="Please select"
            />
          </CCol>
          <CCol sm="6">
            <CInput label="Ngày ký" type="date" :value.sync="document.sign_at" class="mb-0" />
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton type="submit" size="sm" @click="updateDocument" class="float-right" color="success">
        <CIcon name="cil-check" />Lưu
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Detail",
  props: {
    documentId: {
      required: true
    }
  },
  data() {
    return {
      books: [],
      types: [],
      signers: [],
      publishers: [],
      document: {
        id: null,
        creator: {}
      }
    };
  },
  watch: {
    documentId: {
      immediate: true,
      handler() {
        this.init();
      }
    }
  },
  created() {},
  methods: {
    init() {
      this.fetchData();
      this.fetchDocument();
    },
    async fetchData() {
      const bookResponse = await services.book.all();
      this.books = this.formatKeys(bookResponse.data);
      const typeResponse = await services.documentType.all();
      this.types = this.formatKeys(typeResponse.data);
      const signerResponse = await services.signer.all();
      this.signers = this.formatKeys(signerResponse.data);
      const publisherResponse = await services.publisher.all();
      this.publishers = this.formatKeys(publisherResponse.data);
    },
    async fetchDocument() {
      const documentResponse = await services.document.get(
        this.documentId,
        "with=creator"
      );
      this.document = documentResponse.data;
      return documentResponse.data;
    },
    async updateDocument() {
      await services.document
        .update(this.document, this.documentId)
        .then(response => {
          this.$toast.success("Đã lưu");
          this.$emit("update", response.data);
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    }
  }
};
</script>
