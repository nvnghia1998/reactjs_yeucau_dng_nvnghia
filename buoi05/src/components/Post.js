function Post({ data }) {
  return (
    <>
      <div className="col-md-3">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={data.url_image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.fullname}</h5>
            <p className="card-text">{data.post_content}</p>
            <a href="#" className="btn btn-primary">{data.time_added}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;