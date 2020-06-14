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
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Loại văn bản</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.type_id"
                  :multiple="false"
                  :options="types"
                  :clearable="false"
                ></treeselect>
              </template>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="12">
            <CInput label="Số ký hiệu" :value.sync="document.symbol" class="mb-0" />
          </CCol>
        </CRow>
        <CRow class="form-group">
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Người soạn</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.writer_id"
                  :multiple="false"
                  :options="writers"
                  @search-change="fetchWriters"
                  @input="onClearWriter"
                >
                  <label
                    slot="option-label"
                    slot-scope="{ node }"
                  >{{ node.raw.department ? node.raw.label + ' - ' + node.raw.department.name : node.raw.label }}</label>
                </treeselect>
              </template>
            </CFormGroup>
          </CCol>
          <CCol sm="6">
            <CInput label="Người tạo" :value="document.creator.name" readonly class="mb-0" />
          </CCol>
        </CRow>
        <CTextarea
          label="Trích yếu"
          placeholder="Content..."
          rows="5"
          :value.sync="document.abstract"
        />
        <CRow class="form-group">
          <CCol sm="6">
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Nơi ban hành</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.publisher_id"
                  :multiple="false"
                  :options="publishers"
                  :clearable="false"
                ></treeselect>
              </template>
            </CFormGroup>
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
            <CFormGroup class="form-group mb-0">
              <template #label>
                <slot name="label">
                  <label>Người ký</label>
                </slot>
              </template>
              <template #input>
                <treeselect
                  v-model="document.signer_id"
                  :multiple="false"
                  :options="signers"
                  :clearable="false"
                >
                  <label
                    slot="option-label"
                    slot-scope="{ node }"
                  >{{ node.raw.signer ? node.raw.label + ' - ' + node.raw.signer.description : node.raw.label }}</label>
                </treeselect>
              </template>
            </CFormGroup>
          </CCol>
          <CCol sm="6">
            <CInput label="Ngày ký" type="date" :value.sync="document.sign_at" class="mb-0" />
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton type="submit" size="sm" @click="updateDocument" class="float-right" color="success">
        <CIcon name="cil-check" /> Lưu
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";
// import the component
import { Treeselect } from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Detail",
  props: {
    documentId: {
      required: true
    }
  },
  components: { Treeselect },
  data() {
    return {
      books: [],
      types: [],
      signers: [],
      writers: [],
      publishers: [],
      document: {
        id: null,
        creator: {},
        writer: {}
      }
    };
  },
  watch: {
    documentId: {
      handler() {
        this.init();
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.fetchDocument();
      this.fetchTypes();
      this.fetchBooks();
      this.fetchPublishers();
      this.fetchSigners();
      this.fetchWriters();
    },
    async fetchDocument() {
      const documentResponse = await services.document.get(
        this.documentId,
        "with=creator;writer"
      );
      this.document = documentResponse.data;
      return documentResponse.data;
    },
    async fetchTypes() {
      const typeResponse = await services.documentType.all();
      this.types = this.formatKeys(typeResponse.data, {
        id: "id",
        name: "label"
      });
      return typeResponse;
    },
    async fetchBooks() {
      const bookResponse = await services.book.all();
      this.books = this.formatKeys(bookResponse.data);
      return bookResponse;
    },
    async fetchPublishers() {
      const publisherResponse = await services.publisher.all();
      this.publishers = this.formatKeys(publisherResponse.data, {
        id: "id",
        name: "label"
      });
      return publisherResponse;
    },
    async fetchSigners() {
      const signerResponse = await services.signer.all();
      this.signers = this.formatKeys(signerResponse.data, {
        id: "id",
        name: "label"
      });
      return signerResponse;
    },
    async fetchWriters(query = "") {
      const writersResponse = await services.user.all(
        `search=name:${query}&with=department`
      );
      this.writers = this.formatKeys(writersResponse.data.data, {
        id: "id",
        name: "label"
      });
      if (
        !this.writers.map(item => item.id).includes(this.document.writer_id) &&
        this.document.writer
      ) {
        this.writers.push({
          id: this.document.writer.id,
          label: this.document.writer.name
        });
      }
      return writersResponse;
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
    },
    onClearWriter(value) {
      if (value != undefined) return;
      this.document.writer_id = null;
    }
  }
};
</script>
