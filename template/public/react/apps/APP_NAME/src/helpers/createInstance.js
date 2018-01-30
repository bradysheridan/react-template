/*
  generalized function for saving and restoring component states
  https://stackoverflow.com/questions/31352261/how-to-keep-react-component-state-between-mount-unmount
*/
function createInstance() {
  let func = null

  return {
    save: function(f) {
      func = f
    },
    restore: function(context) {
      func && func(context)
    }
  }
}

module.exports = createInstance
