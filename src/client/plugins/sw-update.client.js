export default async function checkForUpdate (context, err, firstTime = true) {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration()

    if (registration) {
      registration.update()

      if (firstTime) {
        registration.addEventListener('controllerchange', () => {
          window.location.reload()
        })
      }
    }
  }

  setTimeout(() => {
    checkForUpdate(context, err, false)
  }, 5000)
}
