<template>
  <CCard>
    <CCardHeader>
      <strong>Tạo văn bản</strong>
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
          <CCol sm="12">
            <CInput label="Số ký hiệu" :value.sync="document.symbol" class="mb-0" />
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
      <CButton type="submit" size="sm" @click="create" class="float-right" color="success">
        <CIcon name="cil-check" />Tạo
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Create",
  data() {
    return {
      books: [],
      types: [],
      signers: [],
      publishers: [],
      document: {
        book_id: null,
        type_id: null,
        symbol: null,
        abstract: null,
        publisher_id: null,
        published_at: null,
        signer_id: null,
        sign_at: null,
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
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
    create() {
      services.document
        .create(this.document)
        .then(response => {
          this.$router.push({ path: `/documents/${response.data.id}` });
          this.$toast.success("Đã tạo văn bản");
        })
        .catch(error => {
          this.toastHttpError(error);
        });
    },
  }
};
</script>
