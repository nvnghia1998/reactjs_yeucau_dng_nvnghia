
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    authorId: post.author,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    view: post.view_count,
    categories:post.categories
  }

  
}

export function getListCategoryLocalStore() {
    return JSON.parse(localStorage.getItem('categories')) || [];
}