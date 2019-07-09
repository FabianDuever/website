const $background = document.querySelector('.background')
const $backgroundPlaceholder = document.querySelector('.background-placeholder')
const onDidLoad = () => {
  requestAnimationFrame(() => {
    $background.classList.add('loaded')
  })
  setTimeout(() => {
    $backgroundPlaceholder.style.display = 'none'
  }, 4000)
}
window.requestIdleCallback(() => {
  $background.style.display = 'initial'
  if ($background.complete) {
    onDidLoad()
  }
  $background.addEventListener('load', onDidLoad)
})
