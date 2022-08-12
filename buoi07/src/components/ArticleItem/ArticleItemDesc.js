

export default function ArticleItemDesc({desc}) {
  return (
    <p className="article-item__desc"><span dangerouslySetInnerHTML={{__html: desc}}/></p> 
  )
}