import React from 'react'
import Loadable from 'react-loadable'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import PageLoading from '../components/PageLoading'

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

const Router = () => <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>
export default Router
