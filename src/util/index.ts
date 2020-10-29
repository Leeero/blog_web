import { createFromIconfontCN } from '@ant-design/icons'

export const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2124777_4yxiduyyxnd.js', // 在 iconfont.cn 上生成
})

/**
 * 获取当前页面的相对路径
 */
export function getUrlRelativePath() {
  const url = document.location.toString()
  const arrUrl = url.split('//')

  const start = arrUrl[1].indexOf('/')
  let relUrl = arrUrl[1].substring(start) //stop省略，截取从start开始到结尾的所有字符

  if (relUrl.indexOf('?') !== -1) {
    relUrl = relUrl.split('?')[0]
  }
  return relUrl
}
