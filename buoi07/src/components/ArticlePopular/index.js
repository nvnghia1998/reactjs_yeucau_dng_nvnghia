import ArticleItem from '../ArticleItem'
import './popular-news-list.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchArticlePopularAsync } from '../../store/post/actions';


function ArticlePopular() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Post.articlePopular);

  useEffect(() => {
    dispatch(actFetchArticlePopularAsync());
  }, [dispatch]);


  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="/" className="btn btn-default">View More</a>
        </div>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {
                posts.map((post,index) => {
                  if(index < 2) {
                    return (
                      <div className="popular-news__list--card" key={post.id}>
                        <ArticleItem isStyleCard isShowCategoies isShowDesc post={post}/>
                      </div>
                    )
                  }
                  
                })
              }

            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              {
                posts.map((post,index) => {
                  if(index === 2) {
                    return (
                      <div className="popular-news__list--card" key={post.id}>
                        <ArticleItem isStyleCard isShowCategoies isStyleRow isShowDesc post={post}/>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlePopular