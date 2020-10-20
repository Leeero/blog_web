import { Spin } from 'antd'
import React from 'react'
import './index.scss'

export default function PageLoading() {
  return (
    <div className="loading">
      <Spin />
    </div>
  )
}
