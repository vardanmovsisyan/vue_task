/* eslint-disable */
let error = '';
let message = '';
const buttons = [
  {
    active: true,
    name: 'sum',
    symbol: '+',
    operation: function(a, b) {
      return a + b
    }
  },
  {
    active: false,
    symbol: '−',
    name: 'subtraction',
    operation: function(a, b) {
      return a - b
    }
  },
  {
    active: false,
    symbol: '×',
    name: 'multiplication',
    operation: function(a, b) {
      return a * b
    },
    validate: function(a, b) {
      if (a.toString().length === 0 || b.toString().length === 0) {
        error = 'Please specify the numbers !';
        return false
      } else if (a === 0 || b === 0) {
        message = 'Every number multiplied by 0 is \'0\'';
        error = '';
        return true
      }

      message = '';
      error = '';
      return true
    },
  },
  {
    active: false,
    symbol: '÷',
    name: 'division',
    operation: function(a, b) {
      return a / b
    },
    validate: function(a, b) {
      if (a.toString().length === 0 || b.toString().length === 0) {
        error = 'Please specify the numbers !';
        return false
      } else if (a === 0 && b !== 0) {
        message = '\'0\' divided by any other number is always 0';
        error = '';
        return true
      } else if (b === 0) {
        error = 'You can\'t divide a number by \'0\'';
        return false
      }
      message = '';
      error = '';
      return true
    },
  },
];

const overridingOperation = null;
/*
  Override the current function running when user inputs sth

  const overridingOperation = function(a, b) {
    return a + b + a
  }
 */
