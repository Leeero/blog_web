import { AntDesignOutlined, GithubOutlined, QqOutlined, WechatOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Avatar, Divider } from 'antd'
import React from 'react'
import './index.scss'

export default function AuthorCard() {
  return (
    <div className="author">
      <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AntDesignOutlined />} />
      <div className="author_name">Lero</div>
      <Divider className="author_divider">社交账号</Divider>
      <div className="author_contact">
        <GithubOutlined className="author_contact-icon" />
        <WechatOutlined className="author_contact-icon" />
        <QqOutlined className="author_contact-icon" />
        <ZhihuOutlined className="author_contact-icon" />
      </div>
    </div>
  )
}
