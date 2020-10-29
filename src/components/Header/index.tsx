import { getUrlRelativePath, MyIcon } from '@/util'
import { Affix, Col, Menu, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

export default function PageHeader() {
  const history = useHistory()

  const [activeMenu, setActiveMenu] = useState('home')

  useEffect(() => {
    const pathName = getUrlRelativePath()
    switch (pathName) {
      case '/':
        setActiveMenu('home')
        break
      case '/articleDetails':
        setActiveMenu('article')
        break

      default:
        break
    }
  }, [])

  /**
   * 点击菜单事件
   * @param e
   */
  const handleClickMenu = (e: any) => {
    switch (e.key) {
      case 'home':
        history.push('/')
        break
      default:
        break
    }
    setActiveMenu(e.key)
  }

  return (
    <Affix offsetTop={0}>
      <div className="header">
        <Row justify="center">
          <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">Lero</span>
            <span className="header-txt">路漫漫其修远兮,吾将上下而求索</span>
          </Col>

          <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal" selectedKeys={[activeMenu]} onClick={(e) => handleClickMenu(e)}>
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
    </Affix>
  )
}
