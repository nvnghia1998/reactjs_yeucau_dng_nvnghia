import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Post from './components/Post';
import { actGetListPost, actGetListPostAsync } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const listPosts = useSelector(state => state.listPosts);
  
  function handleGetList() {
    dispatch(actGetListPostAsync(5,2))
  }
  return (
    <>
      <button onClick={handleGetList}>Get list posts</button>

      <div className='row'>
      {listPosts.length && listPosts.map(item => <Post data={item} key={item.PID} />)}
      </div>
    </>
  );
}

export default App;
