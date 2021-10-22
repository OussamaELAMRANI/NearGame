import { render, cleanup } from '@testing-library/react'
import Menu from '../index'

describe('Menu.tsx', () => {
  afterEach(cleanup)

  test('Menu render correctly !', () => {
    const { getByText } = render(<Menu />)

    expect(getByText('Menu')).toBeInTheDocument()
  })
})
