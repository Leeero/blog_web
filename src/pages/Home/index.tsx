import { CalendarOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { Col, List, Row } from 'antd'
import React, { useState } from 'react'
import AuthorCard from '../../components/AuthorCard'
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
    <div className="home">
      <Row className="home-main" justify="center">
        <Col className="home-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            itemLayout="vertical"
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                <div className="home-title">{item.title}</div>
                <div className="home-icon">
                  <span>
                    <CalendarOutlined />
                    2020-10-17
                  </span>
                  <span>
                    <FolderOpenOutlined />
                    vue
                  </span>
                </div>
                <div className="home-context">
                  {item.context}
                  <div className="home-context_more">查看全文 {'>'}</div>
                </div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="home-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <AuthorCard />
        </Col>
      </Row>
    </div>
  )
}
