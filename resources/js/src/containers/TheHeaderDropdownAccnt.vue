<template>
  <CButton
    size="sm"
    color="danger"
    @click="logout"
    variant="outline"
    v-c-tooltip="'Đăng xuất'"
  >
    <CIcon name="cil-lock-locked" class="m-0" />
  </CButton>
</template>

<script>
export default {
  name: "TheHeaderDropdownAccnt",
  data() {
    return {
      itemsCount: 42
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("auth/logout")
        .then(response => {
          this.redirectToLogin();
        })
        .catch(error => {
          this.redirectToLogin();
        });
    },
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>