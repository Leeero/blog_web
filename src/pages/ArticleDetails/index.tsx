import AuthorCard from '@/components/AuthorCard'
import PageHeader from '@/components/Header'
import { CalendarOutlined, FireOutlined, FolderOpenOutlined, HomeOutlined } from '@ant-design/icons'
import { Affix, Breadcrumb, Col, Row } from 'antd'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import './index.scss'

let markdown =
  '# p01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '`console.log(111)` \n\n' +
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```'

export default function ArticleDetails() {
  return (
    <div className="details">
      <PageHeader />
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
            <div className="detailed-content">
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </div>
          </div>
        </Col>

        <Col className="details_right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <AuthorCard />
          <Affix offsetTop={40}>
            <div className="details_right-menu">
              <MarkNav className="article-menu" source={markdown} ordered={false} />
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  )
}
