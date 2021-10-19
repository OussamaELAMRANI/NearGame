import { render, cleanup } from '@testing-library/react'
import { SideBar } from '../index'

describe('SideBar.tsx', () => {
  afterEach(cleanup)

  test('simple content on show up on the side bar', () => {
    const { getByText } = render(<SideBar />)

    expect(getByText('SideBar')).toBeInTheDocument()
  })
})
