import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { actFetchArticleGeneralAsync } from '../../store/post/actions';

function ArticleGeneral() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Post.articleGeneral);
  const [perPage, setPerPage] = useState(2);
  useEffect(() => {
    dispatch(actFetchArticleGeneralAsync(perPage));
  }, [dispatch, perPage]);

  const handleLoadMore = () => {
    setPerPage(prevState => prevState + 2)
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            posts.map(post => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={post.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} post={post} />
                </div>
              )
            })
          }

        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button type="primary" size="large" onClick={handleLoadMore} loading={true}>Tải thêm</Button>
        </div>
      </div>
    </div>
  )
}

export default ArticleGeneral