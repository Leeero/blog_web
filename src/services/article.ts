import request from '@/util/request'

export async function getArticleList(): Promise<any> {
  return request('/api/v1/blog/article/list')
}
