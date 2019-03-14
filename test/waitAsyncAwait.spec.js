import waitAsync from '../util/waitAsync'

describe('waitAsync', () => {
  it('resolves', async () => {
    const startTime = new Date()

    console.log('waitAsyncAwait', startTime)

    const result = await waitAsync()

    console.log('waitAsyncAwait', new Date() - startTime)

    expect(result).toBeTruthy()

    console.log('waitAsyncAwait', new Date() - startTime)
  })
})
