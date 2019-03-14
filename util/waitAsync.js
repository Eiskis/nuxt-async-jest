import waitPromise from './waitPromise'

export default async () => {

  try {
    console.log('waitAsync starting')
    const duration = await waitPromise()
    console.log('waitAsync resolving')
    return true

  } catch (error) {
    console.log('waitAsync', 'waitPromise failed')
    return error
  }

}
