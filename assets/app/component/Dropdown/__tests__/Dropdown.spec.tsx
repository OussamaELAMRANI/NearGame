import { cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'
import Dropdown from '../index'

describe('Dropdown.tsx', () => {
  afterEach(cleanup)

  it('should render correctly !', () => {
    const elem = create(<Dropdown />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
