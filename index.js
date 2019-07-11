const $background = document.querySelector('.background')
const $backgroundPlaceholder = document.querySelector('.background-placeholder')
const onDidLoad = () => {
  $background.classList.add('loaded')
  setTimeout(() => {
    $backgroundPlaceholder.style.display = 'none'
  }, 4000)
}
const onIdle = window.requestIdleCallback || (fn => setTimeout(fn, 50))
onIdle(() => {
  $background.style.display = 'initial'
  if ($background.complete) {
    requestAnimationFrame(() => requestAnimationFrame(onDidLoad))
  } else {
    $background.addEventListener('load', onDidLoad)
  }
})
