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
    this.init();
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
    async init() {
      const books = await this.fetchDocument();
      const system = await this.fetchSystem();
      const operating = await this.fetchOperating();
      this.$options.nav[0]._children.push(
        ...books,
        ...operating,
        ...system
      );
      this.RFKey += 1;
    },

    async fetchDocument() {
      return await services.book.all().then(response => {
        return [
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
      });
    },

    async fetchSystem() {
      return await services.auth.namePermissions().then(permissions => {
        return this.system.filter(item => {
          return !!item.permission
            ? permissions.includes(item.permission)
            : true;
        });
      });
    },

    async fetchOperating() {
      return await services.auth.namePermissions().then(permissions => {
        return this.operating.filter(item => {
          return !!item.permission
            ? permissions.includes(item.permission)
            : true;
        });
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
          icon: "cil-notes",
          permission: "Báo cáo thống kê"
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
          icon: "cil-people",
          permission: "Quản lý người dùng"
        },
        {
          _name: "CSidebarNavItem",
          name: "Chức danh",
          to: "/titles",
          icon: "cil-contact",
          permission: "Quản lý chức danh"
        },
        {
          _name: "CSidebarNavItem",
          name: "Phòng ban",
          to: "/departments",
          icon: "cil-lan",
          permission: "Quản lý phòng ban"
        },
        {
          _name: "CSidebarNavItem",
          name: "Người ký",
          to: "/signers",
          icon: "cil-touch-app",
          permission: "Quản lý người ký"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nơi ban hành",
          to: "/publishers",
          icon: "cil-institution",
          permission: "Quản lý nơi ban hành"
        },
        {
          _name: "CSidebarNavItem",
          name: "Loại văn bản",
          to: "/document-types",
          icon: "cil-text-size",
          permission: "Quản lý loại văn bản"
        },
        {
          _name: "CSidebarNavItem",
          name: "Sổ văn bản",
          to: "/books",
          icon: "cil-book",
          permission: "Quản lý sổ văn bản"
        },
        {
          _name: "CSidebarNavItem",
          name: "Nhóm",
          to: "/roles",
          icon: "cil-address-book",
          permission: "Quản lý nhóm"
        },
        {
          _name: "CSidebarNavItem",
          name: "Quyền",
          to: "/permissions",
          icon: "cil-lock-locked",
          permission: "Quản lý quyền"
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
