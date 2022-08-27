import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actFetchArticleGeneralAsync } from "../store/post/actions"
import { useParams } from "react-router-dom"

function SearchPage() {
  const dispatch = useDispatch();

  const keySearch = getQueryStr('q')
  const [loading, setLoading] = useState(false);
  let { list, currentPage, total, totalPages } = useSelector(state => state.Post.articlePaging);
  let [page, setPage] = useState(1)
  const hasMorePost = currentPage < totalPages;

  const params = useParams();
  const slugCate = params.slug;
  const listCate = useSelector(state => state.Category.hashCategoryById) || [];
  const cate = {};
console.log(listCate);

  function handleLoadMore() {
    if (loading) return;
    setLoading(true);
    setPage((page) => page + 1)
  }

  
    
  useEffect(() => {
    let param = {
      page: 1,
      currentPage: page,
      keySearch,
      categoriesId:cate.id
    }
    if(listCate.length) {
      cate = listCate.find(cate => cate.slug === slugCate);
      param.categoriesId = cate.id
    }
    
    dispatch(actFetchArticleGeneralAsync(param)).then(() => {
      setLoading(false);
    })
  }, [page]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {
          slugCate ? (
            <MainTitle type="search">{total} kết quả tìm kiếm với category "{slugCate}"</MainTitle>
          ) : (
            <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa "{keySearch}"</MainTitle>
          )
        }
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            {
              list.map(item => {
                return (
                  <div className="tcl-col-12 tcl-col-md-12" key={item.id}>
                    <ArticleItem isStyleCard isShowAvatar={false} post={item} />
                    <ArticleItem
                      isStyleCard
                      isShowCategoies
                      isShowAvatar={false}
                      isShowDesc={false}
                    />
                  </div>
                )
              })
            }
          </div>

        </div>
        {
          hasMorePost && (
            <div className="text-center">
              <Button type="primary" size="large" onClick={handleLoadMore} loading={loading}>Tải thêm</Button>
            </div>
          )
        }

      </div>
    </div>

  )
}

export default SearchPage