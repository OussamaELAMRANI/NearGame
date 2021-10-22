const functionalComponent = `
const {{component}} = () => {
  return (<div> {{component}} </div>)
}

export default {{ component }}
`

const testComponent = `
import { render, cleanup } from '@testing-library/react'
import {{ component }} from '../index'

describe('{{ component }}.tsx', () => {
  afterEach(cleanup)

  test('{{component}} render correctly !', () => {
    const { getByText } = render(<{{ component }} />)

    expect(getByText('{{component}}')).toBeInTheDocument()
  })
})
`

module.exports = {
  functionalComponent,
  testComponent
}
