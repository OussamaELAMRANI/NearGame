import { Route } from 'react-router-dom'
import Dashboard from './page/dashboard'

function App () {
  return (
        <div>
            <Route path={'/'}>
                <Dashboard/>
            </Route>
        </div>
  )
}

export default App
