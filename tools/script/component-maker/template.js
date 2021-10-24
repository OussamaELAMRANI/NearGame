const functionalComponent = `
const {{component}} = () => {
  return (<div> {{component}} </div>)
}

export default {{ component }}
`

const testComponent = `
import { cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'
import {{ component }} from '../index'

describe('{{ component }}.tsx', () => {
  afterEach(cleanup)

  it('should render correctly !', () => {
    const elem = create(<{{ component }} />).toJSON()
    expect(elem).toMatchSnapshot()
  })
})
`

module.exports = {
  functionalComponent,
  testComponent
}
