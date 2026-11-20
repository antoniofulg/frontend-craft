# Frontend Craft 0.27.6 verification

Scope: keyboard, input and Back rows of [mobile web](../skills/frontend-craft/references/interaction-accessibility.md#mobile-web) and its principles for native apps. `video-craft` is unchanged.

## Login probe

A model received only the mobile web section and a synthetic sign-in screen: one e-mail field with `autofocus`, a `100vh` shell, a `position: fixed` Continuar bar and a help sheet with a code field. The request was "the keyboard hides the Continuar button".

A first draft of the keyboard row told short forms to move the action right after the field. The probe did that, which still let iOS pan the whole screen up when the field took focus; the maintainer wanted the action kept at the bottom with the free space shrinking instead. The row was rewritten around that order (free space shrinks, then only the content scrolls, the action stays visible, nothing else moves).

With the revised row, a fresh probe kept Continuar at the bottom of a column sized to the visible area: content in a `flex: 1; min-height: 0; overflow-y: auto` region, the action with `margin-top: auto`, `interactive-widget=resizes-content` with `100dvh` for Android and a fixed column following `visualViewport.offsetTop` and `height` with `scrollIntoView({ block: "nearest" })` for iOS. It also set the e-mail input's type, autofill, `enterkeyhint` and 16 px size, removed `autofocus`, turned the sheet into a modal `<dialog>` with contained scroll and gave the code field `one-time-code`. It listed keyboard behavior on both platforms, page panning on iOS, iOS Back and safe areas as needing a real device.

This was a source-only probe with the reference supplied directly. It did not test skill discovery, a browser or a device, the native-app subsection, the viewport sweep change, or improvement over the previous version.
