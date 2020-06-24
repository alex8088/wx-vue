import { go } from '../router'

const routerMixin = {
  methods: {
    handleClick(evt) {
      if (this.to) {
        go(this.to, this.$router);
      } else {
        this.$emit("click", evt);
      }
    }
  }
}

export default routerMixin