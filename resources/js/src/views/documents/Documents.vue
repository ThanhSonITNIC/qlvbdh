<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-grid" />Danh sách văn bản
          <CButton
            size="sm"
            @click="goCreate"
            class="float-right"
            color="primary"
            variant="outline"
          >
            <CIcon name="cil-plus" />
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CSearchBox
            :fields="searchFields"
            @fieldChanged="searchFieldChanged"
            @valueChanged="searchValueChanged"
          />
          <CDataTable
            hover
            striped
            :loading="loading"
            :items="items"
            :fields="fields"
            clickable-rows
            @row-clicked="rowClicked"
          >
            <template #publisher="{item}">
              <td>{{item.publisher.name}}</td>
            </template>
            <template #type="{item}">
              <td>{{item.type.name}}</td>
            </template>
          </CDataTable>
          <CPagination
            align="center"
            :pages="pages"
            :active-page.sync="currentPage"
            :activePage="currentPage"
          />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import services from "../../services/factory";
import CSearchBox from "../../components/SearchBox";

export default {
  name: "Documents",
  components: {
    CSearchBox
  },
  data() {
    return {
      loading: true,
      items: null,
      fields: [
        { key: "symbol", label: "Số ký hiệu", _classes: "font-weight-bold" },
        { key: "abstract", label: "Trích yếu", _classes: "w-50" },
        { key: "type", label: "Loại" },
        { key: "publisher", label: "Nơi ban hành" },
        { key: "published_at", label: "Ngày ban hành" }
      ],
      searchFields: [
        { value: "symbol", label: "Số ký hiệu" },
        { value: "abstract", label: "Trích yếu" },
        { value: "type.name", label: "Loại" },
        { value: "creator.name", label: "Người soạn" },
        { value: "signer.name", label: "Người ký" },
        { value: "published_at", label: "Ngày ban hành" },
        { value: "sign_at", label: "Ngày ký" },
        { value: "publisher.name", label: "Nơi ban hành" },
        { value: "organizes.name", label: "Nơi nhận" },
        { value: "linkTo.symbol", label: "Liên kết văn bản đến" }
      ],
      currentPage: 1,
      pages: 0,
      size: 0,
      searchValue: "",
      searchField: "symbol",
      bookId: null
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params && route.params.book) {
          this.bookId = route.params.book;
        }
        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page);
        }
      }
    },
    currentPage: {
      handler(page) {
        this.pageChange(page);
        this.currentPage = page;
        this.fetch();
      }
    },
    bookId: {
      handler(page) {
        this.fetch();
      }
    }
  },
  computed: {
    query() {
      return this.withQuery + "&" + this.pageQuery + "&" + this.searchQuery;
    },
    pageQuery() {
      return this.currentPage ? "page=" + this.currentPage : "";
    },
    withQuery() {
      return "with=publisher;type";
    },
    searchQuery() {
      return (
        `search=book.id:${this.bookId}` +
        (this.searchField && this.searchValue
          ? ";" + (this.searchField + ":" + this.searchValue)
          : "") +
        "&searchJoin=and"
      );
    }
  },
  methods: {
    async fetch() {
      this.loading = true;
      const response = await services.document.all(this.query);
      this.items = response.data.data;
      this.currentPage = response.data.current_page;
      this.pages = response.data.last_page;
      this.loading = false;
    },
    rowClicked(item, index) {
      this.$router.push({ path: `/documents/${item.id}` });
    },
    goCreate() {
      this.$router.push({
        path: `/documents/create`,
        query: { book: this.bookId }
      });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    searchFieldChanged(item) {
      this.searchField = item.value;
      this.fetch();
    },
    searchValueChanged(value) {
      this.searchValue = value;
      this.fetch();
    }
  }
};
</script>
