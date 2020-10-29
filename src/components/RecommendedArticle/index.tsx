import { List } from 'antd'
import React from 'react'
import './index.scss'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export default function RecommendedArticle() {
  return (
    <div className="recommended">
      <List
        size="small"
        header={<div className="recommended_title">推荐阅读</div>}
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  )
}
