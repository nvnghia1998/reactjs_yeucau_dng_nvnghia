import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function ArticleItemCategories({ categories }) {
  const allCate = useSelector(state => state.Category.listCategory);
  if(!allCate) return null;
  if(!categories) return null;
  return (
    <ul className="article-item__categories">
      {
        categories.map(item => {
          if(!item) return null;
          return (
            // <Link to={cate.link} key={cate.id}>{cate.name}</Link>
            <li key={allCate[item].id}><a href={allCate[item].link} className="btn btn-category">{allCate[item].name}</a></li>
          )
        })
      }
    </ul>
  )
}