import AuthorCard from '@/components/AuthorCard'
import PageHeader from '@/components/Header'
import RecommendedArticle from '@/components/RecommendedArticle'
import { getArticleList } from '@/services/article'
import { CalendarOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { Col, Empty, List, Row } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
export interface ArticleModel {
  articleId: number
  articleIntroduction: string
  articleTitle: string
  articleType: string
  createTime: number
}

export default function PageList() {
  const history = useHistory()

  const [listData, setListData] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  /**
   * 获取文章列表
   *
   */
  const handleGetArticleLists = async () => {
    try {
      const { articleLists } = await getArticleList()
      setListData(articleLists)
      setIsEmpty(articleLists.length === 0)
      console.log('dayjs(', dayjs())
    } catch (error) {
      setIsEmpty(true)
    }
  }

  useEffect(() => {
    handleGetArticleLists()
  }, [])

  return (
    <div className="home">
      <PageHeader />
      {isEmpty ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <Row className="home-main" justify="center">
          <Col className="home-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <List
              itemLayout="vertical"
              dataSource={listData}
              renderItem={(item: ArticleModel) => (
                <List.Item>
                  <div className="home-title">{item.articleTitle}</div>
                  <div className="home-icon">
                    <span>
                      <CalendarOutlined />
                      {dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}
                    </span>
                    <span>
                      <FolderOpenOutlined />
                      {item.articleType}
                    </span>
                  </div>
                  <div
                    className="home-context"
                    onClick={() => {
                      history.push('/articleDetails')
                    }}
                  >
                    {item.articleIntroduction}
                    <div className="home-context_more">查看全文 {'>'}</div>
                  </div>
                </List.Item>
              )}
            />
          </Col>

          <Col className="home-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <AuthorCard />
            <RecommendedArticle />
          </Col>
        </Row>
      )}
    </div>
  )
}
