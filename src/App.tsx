import React from 'react'
import './App.scss'
import PageHeader from './components/Header'
import Router from './routes'

export default function App() {
  return (
    <div className="home">
      <PageHeader />
      <Router></Router>
    </div>
  )
}
