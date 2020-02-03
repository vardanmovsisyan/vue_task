export default {
  // TODO: buttons logic in here
  mounted () {
    if (this.operation) {
      this.operation = this.new_operation
    }
  },
  methods: {
    new_operation: function (a, b) {
      return a + b + a * 2 - 1
    }
  }
}
