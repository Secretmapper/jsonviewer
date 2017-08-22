export default (message) => {
  const $body = document.getElementsByTagName('body')[0]

  const $toast = document.createElement('div')
  $toast.className = 'service-worker-toast service-worker-toast--enter'
  $toast.innerHTML = message

  $body.append($toast)

  setTimeout(_ => {
    $toast.className = 'service-worker-toast service-worker-toast--exit'

    setTimeout(_ => {
      $toast.parentNode.removeChild($toast)
    }, 300)
  }, 5000)
}
