import AuthorCard from '@/components/AuthorCard'
import { CalendarOutlined, FireOutlined, FolderOpenOutlined, HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Col, Row } from 'antd'
import React from 'react'
import './index.scss'

export default function ArticleDetails() {
  return (
    <div className="details">
      <Row className="details_main" justify="center">
        <Col className="details_content" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="details_content-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="details_content-title">【前端工程化】篇四 席卷八荒-Webpack（进阶）</div>
          <div className="details_content-icon">
            <span>
              <CalendarOutlined />
              2020-10-17
            </span>
            <span>
              <FolderOpenOutlined />
              vue
            </span>
            <span>
              <FireOutlined />
              5888
            </span>
          </div>
          <div className="details_content-markdown">
            在上一篇的内容中，介绍了webpack的核心概念以及常用的核心配置，并尝试着配置了一个项目脚手架。那么接下来，就进入飞升环节——性能优化和实现原理。
            锦上添花-优化 使用分析工具
          </div>
        </Col>

        <Col className="details_right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <AuthorCard />
        </Col>
      </Row>
    </div>
  )
}
