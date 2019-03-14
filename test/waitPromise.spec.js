import waitPromise from '../util/waitPromise'

describe('waitPromise', () => {
  it('resolves', () => {
    expect(waitPromise()).resolves.toBeTruthy()
  })
})
