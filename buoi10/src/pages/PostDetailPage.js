
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"
import { actFetchPostDetailAsync } from '../store/post/actions'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

function PostDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const post = useSelector(state => state.Post.detail);

console.log(post.author);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchPostDetailAsync(slug))
  }, [dispatch]);

  return (
    <main className="post-detail">
      <div className="spacing" />
      
      <PostDetailHead post={post}/>
      
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent post={post}/>

            <PostDetailSidebar post={post}/>
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage