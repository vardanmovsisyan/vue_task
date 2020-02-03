<template>
  <div class="root">
    <div class="box">
      <div>
        <input type="number" @input="handleInputChange" id="first_value" class="input" v-model.number="firstValue"/>
      </div>
      <div class="operatorSign">
        +
      </div>
      <div>
        <input type="number" @input="handleInputChange" id="second_value" class="input" v-model.number="secondValue"/>
      </div>
      <div class="equalSign">
        =
      </div>
      <div class="resultBox">
        <span v-text="result"></span>
      </div>
    </div>
  </div>
</template>

<script>
import operation from '../mixins/operationMixin'

export default {
  name: 'Sum',
  mixins: [operation],
  data () {
    return {
      firstValue: 0,
      secondValue: 0,
      result: 0
    }
  },
  methods: {
    operation: function (a, b) {
      return a + b
    },
    handleInputChange: function () {
      // eslint-disable-next-line
      if (typeof _operation === 'function') {
        // eslint-disable-next-line
        this.result = _operation(this.firstValue, this.secondValue)
      } else {
        this.result = this.operation(this.firstValue, this.secondValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .root{
    position: relative;
    height: 100vh;
    width: 100vw;
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    min-width: 300px;
    margin: auto;
  }
  .input{
    border-width: 0 0 2px 0;
    text-align: center;
    border-color: black;
  }
  .input,.input:focus,.input:hover,.input:active{
    outline: none;
  }
  .operatorSign,.equalSign{
    font-size: 20px;
  }
</style>
