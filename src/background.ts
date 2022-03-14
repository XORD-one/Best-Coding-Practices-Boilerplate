console.log('background script running')
export default () => {
  console.log(
    'A background script runs in the background from when your extension is first installed to when your extension is disabled or uninstalled. For more information, see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts',
  )
}
