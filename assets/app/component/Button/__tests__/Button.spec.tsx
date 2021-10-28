import { cleanup, render } from '@testing-library/react'
import { create } from 'react-test-renderer'
import Button from '../index'

describe('Button.tsx', () => {
  afterEach(cleanup)

  it('should render correctly !', () => {
    const elem = create(<Button />).toJSON()
    expect(elem).toMatchSnapshot()
  })

  it('should be basic button', function () {
    const btn = render(<Button>my button</Button>)
    expect(btn.container.firstChild).toHaveClass('button base')
  })
})
