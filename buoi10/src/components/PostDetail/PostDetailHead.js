
function PostDetailHead({post}) {
  if (!post) {
    console.log(post);
    return null;
  }
  console.log(post);
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{post.title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="/"><strong></strong></a>
          </li>
          <li className="item date">
            May 15, 2021
          </li>
          <li className="item views">
            {post.viewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            {post.commentCount} <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead