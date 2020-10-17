import { CalendarOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { List } from 'antd'
import React, { useState } from 'react'
import './index.scss'

export default function PageList() {
  const [listData, setListData] = useState([
    {
      title: '使用Nginx部署Vue项目',
      context:
        'Nginx是一个高性能的HTTP和反向代理服务器（反向代理就是通常所说的web服务器加速，它是一种通过在繁忙的web服务器和internet之间增加一个高速的web缓冲服务器来降低实际的web服务器的负载）',
    },
    {
      title: '使用Nginx部署Vue项目',
      context:
        'Nginx是一个高性能的HTTP和反向代理服务器（反向代理就是通常所说的web服务器加速，它是一种通过在繁忙的web服务器和internet之间增加一个高速的web缓冲服务器来降低实际的web服务器的负载）',
    },
    {
      title: '使用Nginx部署Vue项目',
      context:
        'Nginx是一个高性能的HTTP和反向代理服务器（反向代理就是通常所说的web服务器加速，它是一种通过在繁忙的web服务器和internet之间增加一个高速的web缓冲服务器来降低实际的web服务器的负载）',
    },
    {
      title: '使用Nginx部署Vue项目',
      context:
        'Nginx是一个高性能的HTTP和反向代理服务器（反向代理就是通常所说的web服务器加速，它是一种通过在繁忙的web服务器和internet之间增加一个高速的web缓冲服务器来降低实际的web服务器的负载）',
    },
    {
      title: '使用Nginx部署Vue项目',
      context:
        'Nginx是一个高性能的HTTP和反向代理服务器（反向代理就是通常所说的web服务器加速，它是一种通过在繁忙的web服务器和internet之间增加一个高速的web缓冲服务器来降低实际的web服务器的负载）',
    },
  ])

  return (
    <div className="list">
      <List
        itemLayout="vertical"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <div className="list-title">{item.title}</div>
            <div className="list-icon">
              <span>
                <CalendarOutlined />
                2020-10-17
              </span>
              <span>
                <FolderOpenOutlined />
                vue
              </span>
            </div>
            <div className="list-context">
              {item.context}
              <div className="list-context_more">查看全文 {'>'}</div>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}
