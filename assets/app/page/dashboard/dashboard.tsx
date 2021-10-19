import { Route, Link } from 'react-router-dom'
import { GameType } from '@/page/games/game-type'
import { NavSideBar } from '@/layout/side/NavSideBar'

const dashboard = () => {
  return (<div className={'dashboard '}>
        <h2 className={'text-2xl'}>Dashboard</h2>
        <div className="header">
            <Link to={'/admin'}>Admin page</Link>
            <Link to={'/admin/game-type'} > Game Type List</Link>
        </div>
        <div className="side-bar">
            <NavSideBar />
        </div>
        <div className="main">
            <Route path={'/admin/game-type'}>
                <GameType />
            </Route>
            <Route path={'/*'}>
                <h2>404 Error !!</h2>
            </Route>
        </div>
    </div>)
}

export default dashboard
