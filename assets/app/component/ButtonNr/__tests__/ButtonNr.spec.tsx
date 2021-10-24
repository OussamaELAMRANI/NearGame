import { cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'

import ButtonNr from '../index'

describe('ButtonNr.tsx', () => {
  afterEach(cleanup)

  it('should render correctly !', () => {
    const elem = create(<ButtonNr>my button</ButtonNr>).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
