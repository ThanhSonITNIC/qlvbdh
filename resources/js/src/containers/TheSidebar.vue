<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction :key="RFKey" flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";
import services from "../services/factory";

export default {
  name: "TheSidebar",
  nav,
  created() {
    this.fetchDocument();
  },
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    }
  },
  methods: {
    async fetchDocument() {
      const response = await services.book.all().then(response => {
        const document = [
          {
            _name: "CSidebarNavTitle",
            _children: ["Sổ văn bản"]
          },
          ...response.data.map(item => {
            return {
              _name: "CSidebarNavItem",
              name: item.name,
              to: `/books/${item.id}/documents`,
              icon: "cil-notes"
            };
          })
        ];
        this.$options.nav[0]._children.push(
          ...document,
          ...this.operating,
          ...this.system
        );
        this.RFKey += 1;
      });
    }
  },
  data() {
    return {
      RFKey: 0, // key for rerender sidebar
      operating: [
        {
          _name: "CSidebarNavTitle",
          _children: ["Điều hành"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Thống kê",
          to: "/statistic",
          icon: "cil-notes"
        }
      ],
      system: [
        {
          _name: "CSidebarNavTitle",
          _children: ["Hệ thống"]
        },
        {
          _name: "CSidebarNavItem",
          name: "Người dùng",
          to: "/users",
          icon: "cil-people"
        },
        {
          _name: "CSidebarNavItem",
          name: "Chức danh",
          to: "/titles",
          icon: "cil-contact"
        },
        {
          _name: "CSidebarNavItem",
          name: "Phòng ban",
          to: "/departments",
          icon: "cil-lan"
        },
        {
          _name: "CSidebarNavItem",
          name: "Người ký",
          to: "/signers",
          icon: "cil-touch-app"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nơi ban hành",
          to: "/publishers",
          icon: "cil-institution"
        },
        {
          _name: "CSidebarNavItem",
          name: "Loại văn bản",
          to: "/document-types",
          icon: "cil-text-size"
        },
        {
          _name: "CSidebarNavItem",
          name: "Sổ văn bản",
          to: "/books",
          icon: "cil-book"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nhóm",
          to: "/roles",
          icon: "cil-address-book"
        },
        {
          _name: "CSidebarNavItem",
          name: "Quyền",
          to: "/permissions",
          icon: "cil-lock-locked"
        },
        {
          _name: "CSidebarNavItem",
          name: "Cài đặt",
          to: "/settings",
          icon: "cil-settings"
        }
      ]
    };
  }
};
</script>
