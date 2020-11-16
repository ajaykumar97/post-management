import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getAllPosts, deletePost } from './store/actions';
import PostItem from './components/PostItem';

function App(props) {
  const [addNewPostVisible, setAddNewPostVisible] = useState(true);
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

    dispatch(deletePost({ post }));
    return;
  };

  const onAddNewPost = () => {
    setAddNewPostVisible(!addNewPostVisible);
  };

  const addNewPostDiv = () => {
    if (!addNewPostVisible) {
      return null;
    }

    return (
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <input
          style={{
            width: '50%',
            height: 40,
            fontSize: 22
          }}
          placeholder={'Post Title'}
        />

        <input
          style={{
            width: '50%',
            height: 40,
            fontSize: 22,
            marginLeft: 15
          }}
          placeholder={'Post Description'}
        />
      </div>
    );
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

    return (
      <>
        {addNewPostDiv()}

        <button
          style={{
            background: 'transparent',
            width: '100%',
            paddingTop: 10,
            paddingBottom: 10,
            color: 'white',
            borderColor: 'white',
            marginBottom: 20,
            marginTop: 20,
          }}
          onClick={onAddNewPost}
        >
          Add new post
        </button>

        {posts.map((post) => (
          <PostItem key={post.id} post={post} deletePost={onDeletePost} />
        ))}
      </>
    );
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
