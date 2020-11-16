import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getAllPosts } from './store/actions';

function App(props) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const gettingPosts = useSelector(state => state.post.gettingPosts);

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch]);

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
      <div
        style={{
          marginTop: 10,
          background: '#0A79DF',
          padding: 15,
          borderRadius: 10,
        }}
      >
        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'white',
            fontSize: 14
          }}
        >
          {post.body}
        </p>
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Posts
        </p>
      </header>

      <body style={{ paddingBottom: 40, minHeight: '84vh' }}>
        {renderContent()}
      </body>
    </div>
  );
}

export default App;
