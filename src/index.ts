import type { Environment, IInkdropPlugin } from '@inkdropapp/types'

/**
 * Reports a failed window call. `inkdrop.window` exposes the workspace
 * visibility methods over IPC, so the call rejects outright on a build that
 * predates them.
 */
function notifyFailure(app: Environment, message: string) {
  return (error: unknown) => {
    app.notifications.addError(message, {
      detail: error instanceof Error ? error.message : String(error),
      dismissable: true
    })
  }
}

class VisibleOnAllWorkspacesPlugin implements IInkdropPlugin {
  activate(app: Environment) {
    app.window
      .setVisibleOnAllWorkspaces(true)
      .catch(notifyFailure(app, 'Failed to show the window on all workspaces'))
  }

  deactivate(app: Environment) {
    app.window
      .setVisibleOnAllWorkspaces(false)
      .catch(notifyFailure(app, 'Failed to restore the window to a single workspace'))
  }
}

export default new VisibleOnAllWorkspacesPlugin()
