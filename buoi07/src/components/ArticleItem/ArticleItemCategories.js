import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getListCategoryLocalStore} from '../../helpers';

export default function ArticleItemCategories({categories}) {
  const cateAll = getListCategoryLocalStore();
  const arrayCate = [];

  if (!cateAll) return null;

  categories.forEach(item => {
    arrayCate.push(cateAll.find(cate => cate.id == item))
  });

 console.log(arrayCate);
  return (
    <ul className="article-item__categories">
      {
        arrayCate.map(cate => {
          console.log(cate);
          return (
            // <Link to={cate.link} key={cate.id}>{cate.name}</Link>
            <li key={cate.id}><a href={cate.link}  className="btn btn-category">{cate.name}</a></li>

          )
        })
      }
      
    </ul>
  )
}