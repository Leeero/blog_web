import React from 'react'
import './App.scss'
import PageHeader from './components/Header'
import Routers from './routes'

export default function App() {
  return (
    <div className="home">
      <PageHeader />
      <Routers></Routers>
    </div>
  )
}
