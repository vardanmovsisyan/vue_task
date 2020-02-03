<template>
  <div>
    <div class="box error-box" v-if="error">
      x {{error}}
    </div>
    <div class="box warning-box" v-if="message">
      ! {{message}}
    </div>
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
    <div class="box operator-box">
      <button type="button" v-for="button in activeButtons" @click="handleButtonClick(button)" :key="button.name" class="button">
        <span class="sign">{{button.symbol}}</span>
      </button>
    </div>
  </div>
</template>

<script>
// import operation from '../mixins/operationMixin'

export default {
  name: 'Sum',
  // mixins: [operation],

  data () {
    return {
      firstValue: 0,
      secondValue: 0,
      result: 0,
      activeButtons: [],
      message: '',
      error: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.activeButtons = buttons.filter(button => button.active)
    // eslint-disable-next-line no-undef
    if (overridingOperation) {
      // eslint-disable-next-line no-undef
      this.operation = overridingOperation
    }
  },
  methods: {
    operation: function (a, b) {
      return a + b
    },
    validate: function (a, b) {
      if (a.toString().length === 0 || b.toString().length === 0) {
        this.error = 'Please specify the numbers !'
        return false
      }
      this.error = ''
      this.message = ''
      return true
    },
    handleInputChange: function () {
      if (this.validate(this.firstValue, this.secondValue)) {
        this.result = this.operation(this.firstValue, this.secondValue)
      }
    },
    handleButtonClick: function (button) {
      const condition = (button.validate)
        ? (button.validate(this.firstValue, this.secondValue))
        : (this.validate(this.firstValue, this.secondValue))
      // eslint-disable-next-line no-undef
      if (message) {
        // eslint-disable-next-line no-undef
        this.message = message
      }
      // eslint-disable-next-line no-undef
      if (error) {
        // eslint-disable-next-line no-undef
        this.error = error
      }
      if (condition) {
        this.result = button.operation(this.firstValue, this.secondValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    min-width: 300px;
    margin: auto;
  }
  .box:last-child{
    margin-top: 30px;
  }
  .input{
    border-width: 0 0 2px 0;
    text-align: center;
    border-color: black;
  }
  .input,.input:focus,.input:hover,.input:active,
  .button,.button:focus,.button:hover,.button:active{
    outline: none;
  }
  .operatorSign,.equalSign{
    font-size: 20px;
  }
  .button{
    padding: 10px;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background: #6495ed;
    color: #ffffff;
    font-size: 20px;
    line-height: 0.5;
    cursor: pointer;
  }
  .button + .button{
    margin-left: 20px;
  }
  .operator-box{
    justify-content: flex-start;
  }
  .error-box{
    color: darkred;
    background-color: lightcoral;
    padding: 15px 8px;
    margin-bottom: 20px;
    font-weight: bold;
    border-radius: 10px;
  }
  .warning-box{
    color: darkorange;
    background-color: #FFE1A9;
    padding: 15px 8px;
    margin-bottom: 10px;
    font-weight: bold;
    border-radius: 10px;
  }
</style>
