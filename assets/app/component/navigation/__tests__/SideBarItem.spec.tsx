import { render, cleanup } from '@testing-library/react'
import { SideBarItem } from '../index'

describe('SideBarItem.tsx', () => {
  afterEach(cleanup)

  test('simple content on show up on the side bar', () => {
    const { getByText } = render(<SideBarItem />)

    expect(getByText('SideBarItem')).toBeInTheDocument()
  })
})
