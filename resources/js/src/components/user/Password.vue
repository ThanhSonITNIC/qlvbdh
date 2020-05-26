<template>
  <CCard>
    <CCardHeader>
      <strong>Thay đổi mật khẩu</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CInput placeholder="Nhập mật khẩu." label="Mật khẩu" type="password" horizontal />
        <CInput
          placeholder="Nhập mật khẩu mới."
          label="Mật khẩu mới"
          type="password"
          :value.sync="password.password"
          horizontal
        />
        <CInput
          placeholder="Nhập lại mật khẩu mới."
          label="Xác nhận"
          type="password"
          :value.sync="password.password_confirmation"
          horizontal
        />
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton type="submit" @click="updatePassword" size="sm" class="float-right" color="success">
        <CIcon name="cil-check" /> Thay đổi
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Password",
  props: {
    userId: {
      required: true
    }
  },
  data() {
    return {
      password: {
        password_confirmation: "",
        password: ""
      }
    };
  },
  methods: {
    async updatePassword() {
      await services.user
        .update(this.password, this.userId)
        .then(response => {
          this.$toast.open({ message: "Đã thay đổi", type: "success" });
        })
        .catch(error => {
          this.$toast.open({
            message: error.response.data.message,
            type: "error"
          });
        });
    }
  }
};
</script>
