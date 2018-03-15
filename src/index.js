import _ from 'lodash'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./dist/service-worker.js').then(registration => {
      console.log('SW registered 🎉: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed 😬: ', registrationError)
    })
  })
}

function component () {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
