<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-grid"/>
          Danh sách người dùng
        </CCardHeader>
        <CCardBody>
          <SearchBox
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
            <template #title="{item}">
              <td>
                {{item.title ? item.title.name : 'Chưa xác định'}}
              </td>
            </template>
            <template #department="{item}">
              <td>
                {{item.department ? item.department.name : 'Chưa xác định'}}
              </td>
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
import user from '../../services/users'
export default {
  name: 'Users',
  data () {
    return {
      loading: true,
      items: null,
      fields: [
        { key: 'name', label: 'Tên', _classes: 'font-weight-bold'},
        { key: 'email', label: 'Email' },
        { key: 'tel', label: 'Số điện thoại' },
        { key: 'birthday', label: 'Ngày sinh' },
        { key: 'title', label: 'Chức danh' },
        { key: 'department', label: 'Phòng ban' },
      ],
      searchFields: [
        { value: '', label: 'Tất cả'},
        { value: 'name', label: 'Tên'},
        { value: 'email', label: 'Email'},
        { value: 'tel', label: 'Số điện thoại'},
        { value: 'birthday', label: 'Ngày sinh'},
        { value: 'title.name', label: 'Chức danh'},
        { value: 'department.name', label: 'Phòng ban'},
      ],
      currentPage: 1,
      pages: 0,
      size: 0,
      searchValue: '',
      searchField: '',
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.currentPage = Number(route.query.page)
        }
      }
    },
    currentPage: {
      handler(page){
        this.pageChange(page)
        this.currentPage = page
        this.fetch()
      }
    },
  },
  computed: {
    query(){
      return this.withQuery + "&" + this.pageQuery + "&" + this.searchQuery
    },
    pageQuery(){
      return this.currentPage ? 'page=' + this.currentPage : ''
    },
    withQuery(){
      return 'with=title;department'
    },
    searchQuery(){
      return this.searchValue 
             ? 'search=' + this.searchValue + (this.searchField ? '&searchFields=' + this.searchField : '') 
             : ''
    }
  },
  methods: {
    async fetch(){
      this.loading = true
      const response = await user.all(this.query)
      this.items = response.data.data
      this.currentPage = response.data.current_page
      this.pages = response.data.last_page
      this.loading = false
    },
    rowClicked (item, index) {
      this.$router.push({path: `users/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },
    searchFieldChanged(item){
      this.searchField = item.value
      this.fetch()
    },
    searchValueChanged(value){
      this.searchValue = value
      this.fetch()
    },
  }
}
</script>
