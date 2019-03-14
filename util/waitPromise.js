import getDuration from './getDuration'

export default () => {
  const duration = getDuration()
  console.log('waitPromise starting')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('waitPromise resolving')
      resolve(true)
    }, duration)
  })
}
