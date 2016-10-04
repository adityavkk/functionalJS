const eyes = require('eyes')

const styles = Object.assign({}, eyes.defaults.styles, {
  all: 'red',
  string: 'blue',
  label: 'yellow',
  key: 'cyan',
  bool: 'red',
  regexp: 'blue',
})

const inspect = eyes.inspector({
  styles
})

module.exports = function log(...args) {
  inspect(...args.slice().reverse())
}
