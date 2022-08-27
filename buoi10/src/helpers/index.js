
import { MESSAGE_FORM_ERROR } from '../constants';
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
    categoriesId: post.categories,
    viewCount: post.view_count,
  }
}

export function handleHashCategoryById(categories) {
  const hashObj = {}

  categories.forEach(categoryItem => {
    const key = categoryItem.id

    hashObj[key] = {
      id: categoryItem.id,
      name: categoryItem.name,
      slug: categoryItem.slug,
      lang: categoryItem.lang
    }
  })

  return hashObj
}

export function validateFormData({ value, name }) {
  let error = '';

  if (name === 'username' && !value) {
    error = 'Username không được rỗng!';
  }

  if (name === 'password') {
    if (!value) {
      error = 'Password không được rỗng!';
    } else if (value.length < 6) {
      error = 'Password phải có ít nhất 6 ký tự'
    }
  }

  return error;
}


export function validateFormRegister({ value, name }) {
  let error = '';
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (name === 'nickname' && !value) {
    error =  MESSAGE_FORM_ERROR.nickname_required;
  }

  if (name === 'username' && !value) {
    error = MESSAGE_FORM_ERROR.username_required;
  }

  if (name === 'password') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length
    }
  }

  if (name === 'email' && !value) {
    error = MESSAGE_FORM_ERROR.email_required;
    
  }
  if (name === 'email' && regex.test(value) === false) {
    error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
  }
  

  return error;
}

export function mappingPostDetail(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    categories: post.categories,
    content: post.content.rendered,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categoriesId: post.categories,
    viewCount: post.view_count,
    commentCount: post.comment_count,
    tags: post.tags
  }
}
export function mappingMenuData(menu) {
  const childItems = menu.child_items || [];

  return {
    id: menu.ID,
    title: menu.title,
    url: menu.url,
    childItems: childItems.map(mappingMenuData)
  }
}