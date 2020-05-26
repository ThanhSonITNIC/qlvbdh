<template>
  <CCard>
    <CCardHeader>
      <strong>Thông tin</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CInput
          placeholder="Let us know your full name."
          label="Tên"
          :value.sync="user.name"
          horizontal
        />
        <CInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          :value.sync="user.email"
          horizontal
          autocomplete="email"
        />
        <CInput
          label="Số điện thoại"
          placeholder="Enter your tel"
          :value.sync="user.tel"
          horizontal
          autocomplete="tel"
        />
        <CInput label="Ngày sinh" type="date" :value.sync="user.birthday" horizontal />
        <CSelect
          label="Chức danh"
          horizontal
          :value.sync="user.title_id"
          :options="titles"
          placeholder="Please select"
        />
        <CSelect
          label="Phòng ban"
          horizontal
          :value.sync="user.department_id"
          :options="departments"
          placeholder="Please select"
        />
        <CFormGroup class="form-group form-row">
          <template #label>
            <slot name="label">
              <label class="col-form-label col-sm-3">Kích hoạt</label>
            </slot>
          </template>
          <template #input>
            <CSwitch class="mx-1" color="success" :checked.sync="user.active" />
          </template>
        </CFormGroup>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <CButton color="primary" size="sm" @click="goBack">
        <CIcon name="cil-chevron-left" />Trở lại
      </CButton>
      <CButton type="submit" size="sm" @click="updateInfo" class="float-right" color="success">
        <CIcon name="cil-check" />Lưu
      </CButton>
    </CCardFooter>
  </CCard>
</template>

<script>
import services from "../../services/factory";

export default {
  name: "Info",
  props: {
      userId: {
          required: true
      },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes("users");
    });
  },
  data() {
    return {
      usersOpened: null,
      user: [],
      titles: [],
      departments: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const titleResponse = await services.title.all();
      this.titles = this.formatKeys(titleResponse.data);
      const departmentResponse = await services.department.all();
      this.departments = this.formatKeys(departmentResponse.data);
      const userResponse = await services.user.get(this.userId);
      this.user = userResponse.data;
    },
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/users" });
    },
    async updateInfo() {
      await services.user
        .update(this.user, this.userId)
        .then(response => {
          this.$toast.open({ message: "Đã lưu", type: "success" });
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
