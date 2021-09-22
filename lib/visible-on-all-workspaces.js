module.exports = {
  activate() {
    inkdrop.window.setVisibleOnAllWorkspaces(true)
  },
  deactivate() {
    inkdrop.window.setVisibleOnAllWorkspaces(false)
  }
}
