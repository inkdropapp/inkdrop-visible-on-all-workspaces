Visible on All Workspaces
==============

Set the [Inkdrop](https://www.inkdrop.app/) window visible on all workspaces.

By default, the Inkdrop window belongs to the workspace it was opened in — switch to
another workspace and it is left behind. With this plugin enabled, the window follows
you across every workspace, so your notes stay one glance away wherever you are.

## Install

```sh
ipm install visible-on-all-workspaces
```

## How to use

There is nothing to configure. The window becomes visible on all workspaces as soon as
the plugin is enabled, and returns to a single workspace when you disable it from
**Preferences** -> **Plugins**.

## Supported platforms

macOS and Linux. On Windows this plugin does nothing, as Electron does not implement
the underlying window setting there.

On macOS, the window is shown on every workspace but not above windows that are in
full-screen mode.
