import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Page } from '../constants/index'

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route element={ <Page.Home /> } path='/' />
            <Route element={ <Page.Books /> } path='/books' />
            <Route element={ <Page.Update /> } path='/update/:id' />
            <Route element={ <Page.Auth /> } path='/auth' />
            <Route element={ <Page.SignIn /> } path='/signin' />
            <Route element={ <Page.NotFound /> } path='*' />
        </Routes>
    </Router>
  )
}

export default AllRoutes