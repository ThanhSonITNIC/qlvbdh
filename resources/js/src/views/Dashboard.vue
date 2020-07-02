<template>
  <div>
    <CRow>
      <CCol v-for="book in books" sm="6" md="4" :key="book.id">
        <CWidgetBrand
          color="white"
          :right-header="''+book.unread"
          right-footer="Chưa xem"
          :left-header="''+book.count"
          left-footer="Đã nhận"
        >
          <h3 style="color:#3c4b64" class="m-3">{{book.name}}</h3>
        </CWidgetBrand>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import services from "../services/factory";

export default {
  name: "Dashboard",
  data() {
    return {
      books: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.fetchBooks();
    },
    async fetchBooks() {
      const bookResponse = await services.book.all();
      this.books = bookResponse.data;
      console.log(this.books)
      return bookResponse;
    },
  }
};
</script>
