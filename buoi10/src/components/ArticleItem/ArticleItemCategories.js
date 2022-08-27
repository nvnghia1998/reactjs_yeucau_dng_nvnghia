// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

export default function ArticleItemCategories({ categoriesId }) {
  const hashCategoryById = useSelector(state => state.Category.hashCategoryById);
  const history = useHistory()
  
  return (
    <ul className="article-item__categories">
      {
        categoriesId.map(cateId => {
          const category = hashCategoryById[cateId];

          if (!category) {
            return null
          }

          const categorySlugLink = '/category/' + category.slug;

          return <li key={cateId}><a href={categorySlugLink} className="btn btn-category">{category.name}</a></li>
        })
      }
    </ul>
  )
}