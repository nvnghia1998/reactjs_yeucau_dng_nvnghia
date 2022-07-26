import Button from "../../shared/Button";

function ArticleCategory() {
  return (
    <>
      <ul className="article-item__categories">
        <li>
          <Button className="btn btn-category" as="a" href="#">News</Button>
        </li>
        <li>
          <Button className="btn btn-category" as="a" href="#">News</Button>
        </li>
      </ul>
      <ul className="article-item__stats"><li>
        <i className="icons ion-ios-eye" /><span className="text">Views</span>
      </li>
      </ul>
    </>
  );
}

export default ArticleCategory;