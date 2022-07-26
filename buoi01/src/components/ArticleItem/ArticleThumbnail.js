function ArticleThumbnail({thumbnail}) {
  return (
    <>
      <div className="article-item__thumbnail">
        <a href="#">
          <img src={thumbnail} />
        </a>
      </div>
    </>
  );
}

export default ArticleThumbnail;