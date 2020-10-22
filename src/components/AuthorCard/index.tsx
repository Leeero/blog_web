import { AntDesignOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import './index.scss'

export default function AuthorCard() {
  return (
    <div className="author">
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        icon={<AntDesignOutlined />}
      />
      <div className="author_name">Lero</div>
    </div>
  )
}
