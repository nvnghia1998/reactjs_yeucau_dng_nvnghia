import ArticleAuthor from "./ArticleAuthor";
import ArticleCategory from "./ArticleCategory";
import ArticleDes from "./ArticleDes";
import ArticleTiltle from "./ArticleTiltle";

function ArticleContent({ title, description, author, desc, cate, hasImgAu}) {
  return (
    <>
      <div className="article-item__content">
        {cate && <ArticleCategory/>}
        <ArticleTiltle title={title} />
        {desc && <ArticleDes description={description} />}
        <ArticleAuthor {...author} hasImgAu={hasImgAu}/>
      </div>

    </>
  );
}

export default ArticleContent;