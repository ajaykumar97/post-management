export const actionTypes = {
  GET_POSTS_REQUESTED: 'GET_POSTS_REQUESTED',
  GET_POSTS_SUCCEEDED: 'GET_POSTS_SUCCEEDED',
  GET_POSTS_FAILED: 'GET_POSTS_FAILED',
  DELETE_POST_REQUESTED: 'DELETE_POST_REQUESTED',
};

export const requestMethods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT'
};

export const urls = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  getPosts: 'posts',
};