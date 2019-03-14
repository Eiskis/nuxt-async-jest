import waitAsync from '../util/waitAsync'

describe('waitAsync', () => {
  it('resolves', () => {
    expect(waitAsync()).resolves.toBeTruthy()
  })
})
