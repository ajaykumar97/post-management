import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from './App';

test('renders react app', () => {
  const mockStore = configureStore()
  const initialState = {post: {posts: []}}
  let store;

  store = mockStore(initialState)

  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Posts Management System/i);
  expect(linkElement).toBeInTheDocument();
});
