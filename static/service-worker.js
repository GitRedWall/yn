self.addEventListener('install', event => {
  console.log('sw installing…')
})

self.addEventListener('activate', event => {
  console.log('sw now ready!')
})

self.addEventListener('fetch', event => {
  console.log(event.request.url)
  return
})
