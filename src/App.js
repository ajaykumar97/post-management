import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getAllPosts, deletePost } from './store/actions';
import PostItem from './components/PostItem';

function App(props) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const gettingPosts = useSelector(state => state.post.gettingPosts);

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch]);

  const onDeletePost = (post) => {
    const isUserConfirmed = window.confirm('Are you sure you want to delete the post?');

    if (!isUserConfirmed) {
      return;
    }

    dispatch(deletePost({post}))
    return;
  };

  const renderContent = () => {
    if (gettingPosts) {
      return (
        <div
          style={{
            display: 'flex',
            minHeight: '84vh',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Loader
            type={'Puff'}
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      );
    }

    return posts.map((post) => (
      <PostItem key={post.id} post={post} deletePost={onDeletePost} />
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Posts Management System
        </p>
      </header>

      <body style={{ paddingBottom: 40, minHeight: '84vh' }}>
        {renderContent()}
      </body>
    </div>
  );
}

export default App;
