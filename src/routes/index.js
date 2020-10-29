import { createBrowserHistory } from 'history'
import React from 'react'
import Loadable from 'react-loadable'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router-dom'
import PageLoading from '../components/PageLoading'

const history = createBrowserHistory()

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => <PageLoading />,
})

const ArticleDetails = Loadable({
  loader: () => import('../pages/ArticleDetails'),
  loading: () => <PageLoading />,
})

const routesConfig = [
  { path: '/', exact: true, component: Home },
  { path: '/home', exact: true, component: Home },
  { path: '/articleDetails', exact: true, component: ArticleDetails },
]

const Routers = () => <Router history={history}>{renderRoutes(routesConfig)}</Router>
export default Routers
