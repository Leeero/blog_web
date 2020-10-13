import { Col, Menu, Row } from 'antd'
import React from 'react'
import { MyIcon } from '../../util'
import './index.scss'

export default function Header() {
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Lero</span>
          <span className="header-txt">路漫漫其修远兮,吾将上下而求索</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home" icon={<MyIcon type="icon-shouye" />}>
              首页
            </Menu.Item>
            <Menu.Item key="article" icon={<MyIcon type="icon-16" />}>
              文章
            </Menu.Item>
            <Menu.Item key="tag" icon={<MyIcon type="icon-tag" />}>
              标签
            </Menu.Item>
            <Menu.Item key="about" icon={<MyIcon type="icon-guanyuwomen" />}>
              关于
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
