export default {
  methods: {
    handleClick() {
      this.$refs.form.validate(error => {
        if (error) {
          this.$tooltip(error)
        } else {
          this.$toast("验证成功", { type: "success" })
        }
      })
    }
  }
}