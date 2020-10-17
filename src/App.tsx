import { Col, Layout, Row } from 'antd'
import React from 'react'
import './App.scss'
import PageHeader from './components/Header'
import PageList from './components/List'

const { Header, Footer, Sider, Content } = Layout

export default function App() {
  return (
    <div className="home">
      <PageHeader />
      <Row className="home-main" justify="center">
        <Col className="home-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <PageList></PageList>
        </Col>

        <Col className="home-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}
