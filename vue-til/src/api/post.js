import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function createPost(postData) {
  return posts.post('/', postData);
}

function deletePost(id) {
  return posts.delete(`/${id}`);
}

export { fetchPosts, createPost, deletePost };
