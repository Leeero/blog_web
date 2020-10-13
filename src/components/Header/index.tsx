import { createFromIconfontCN } from '@ant-design/icons'
import { Col, Menu, Row } from 'antd'
import React from 'react'
import './index.scss'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2124777_4yxiduyyxnd.js', // 在 iconfont.cn 上生成
})

export default function Header() {
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
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
