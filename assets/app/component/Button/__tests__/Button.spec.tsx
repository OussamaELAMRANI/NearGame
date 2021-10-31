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

  it('should be a Primary big Button', function () {
    const big = 'xl'
    const primary = 'primary'
    const { container } = render(<Button variant={primary} size={big}>my button</Button>)

    expect(container.firstElementChild).toHaveClass(`${primary} ${big}`)
  })

  it('should be a Secondary small disabled Button', function () {
    const small = 'sm'
    const secondary = 'secondary'
    const { container } = render(<Button variant={secondary} size={small} disabled>my button</Button>)
    const button = container.firstElementChild

    expect(button).toHaveClass(`${secondary} ${small}`)
    expect(button).toHaveAttribute('disabled')
  })
})
