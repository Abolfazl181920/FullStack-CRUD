import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Page } from '../constants/index'

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route element={ <Page.Home /> } path='/' />
            <Route element={ <Page.Books /> } path='/books' />
            <Route element={ <Page.Add /> } path='/add' />
        </Routes>
    </Router>
  )
}

export default AllRoutes