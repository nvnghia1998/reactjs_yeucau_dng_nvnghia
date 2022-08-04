import axiosApi from "./api.js";


const PostService = {
  getList: (pageSize,currPage) => {
    const url = `/post/getListPagination.php?pageSize=${pageSize}&currPage=${currPage}`;
    return axiosApi.get(url);
  }
}

export default PostService;
