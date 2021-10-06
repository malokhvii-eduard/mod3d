import { Workbox } from 'workbox-window'

// eslint-disable-next-line import/no-mutable-exports
let workbox

if ('serviceWorker' in navigator) {
  workbox = new Workbox(`${process.env.BASE_URL}sw.js`)
  workbox.addEventListener('controlling', () => {
    window.location.reload()
  })
  workbox.register()
} else {
  workbox = null
}

export default workbox
