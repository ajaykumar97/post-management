import './App.css';
import { useEffect, useState, createRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getAllPosts, deletePost, addNewPost } from './store/actions';
import PostItem from './components/PostItem';

function App(props) {
  const [addNewPostVisible, setAddNewPostVisible] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const gettingPosts = useSelector(state => state.post.gettingPosts);
  const titleInput = createRef();
  
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

  const onAddNewPost = () => setAddNewPostVisible(true);

  const onAddNewPostSubmit = () => {
    if (!postTitle.trim()) {
      alert('Please enter post title');
      return;
    }

    if (!postDescription.trim()) {
      alert('Please enter post description');
      return;
    }
    setPostTitle('');
    setPostDescription('');
    setAddNewPostVisible(!true);
    const data = {
      postTitle: postTitle.trim(),
      postDescription: postDescription.trim(),
    }

    dispatch(addNewPost({data}));
  };

  const addNewPostDiv = () => {
    if (!addNewPostVisible) {
      return null;
    }

    return (
      <Fragment>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <input
            ref={titleInput}
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
            style={{
              width: '50%',
              height: 40,
              fontSize: 22
            }}
            placeholder={'Post Title'}
          />

          <input
            value={postDescription}
            onChange={(event) => setPostDescription(event.target.value)}
            style={{
              width: '50%',
              height: 40,
              fontSize: 22,
              marginLeft: 15
            }}
            placeholder={'Post Description'}
          />
        </div>

        <button
          style={{
            background: 'transparent',
            width: '100%',
            paddingTop: 10,
            paddingBottom: 10,
            color: 'white',
            borderColor: 'white',
            borderRadius: 10,
            marginBottom: 20,
            marginTop: 20,
          }}
          onClick={onAddNewPostSubmit}
        >
          Add new post
        </button>
      </Fragment>
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
            color={'#00BFFF'}
            height={100}
            width={100}
          />
        </div>
      );
    }

    return (
      <Fragment>
        {addNewPostDiv()}

        {posts.map((post) => (
          <PostItem key={post.id} post={post} deletePost={onDeletePost} />
        ))}
      </Fragment>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
          <p>
            Posts Management System
          </p>

          {!addNewPostVisible &&
            <button
              style={{
                position: 'absolute',
                top: 30,
                right: 30,
                background: 'green',
                width: '100',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 10,
                color: 'white',
                borderColor: 'white',
              }}
              onClick={onAddNewPost}
            >
              Add new post
            </button>
          }
      </header>

      <div style={{ paddingBottom: 40, minHeight: '84vh' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
