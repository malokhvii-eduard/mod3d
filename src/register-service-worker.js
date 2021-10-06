// eslint-disable-next-line import/no-mutable-exports
let lazyWorkbox = null

async function registerWorkbox() {
  const { Workbox } = await import(/* webpackChunkName: "workbox" */ 'workbox-window')
  const workbox = new Workbox(`${process.env.BASE_URL}service-worker.js`)
  workbox.register()
  return workbox
}

if ('serviceWorker' in navigator) {
  registerWorkbox().then((workbox) => {
    lazyWorkbox = workbox
  })
}

export default lazyWorkbox
