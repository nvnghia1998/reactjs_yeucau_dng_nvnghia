import PostService from '../services/posts.js'
export const ACT_GET_LIST_POST = 'ACT_GET_LIST_POST';

export function actGetListPost(posts) {
  return {
    type: ACT_GET_LIST_POST,
    payload: { posts }
  }
}
// }
// export function actGetListPostAsync() {

//   return dispatch => {
//     const url = 'https://api-meme-zendvn-01.herokuapp.com/api/v2/post/getListPagination.php?pageSize=3&currPage=1'
//     axios.get(url)
//       .then(res => {
//         dispatch(actGetListPost(res.data.posts))
//       })
//       .catch(err => {
//         console.log('Error' + err);
//       }
//     );
//   }
// }
export function actGetListPostAsync(pageSize, currPage) {
  return async function (dispatch) {
    try {
      const res = await PostService.getList(pageSize, currPage)
      if (res.status === 200) {
        const posts = res.posts;
        dispatch(actGetListPost(posts))
      }
    } catch (error) {
      console.log(error);
    }
  }
}