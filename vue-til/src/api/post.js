import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function fetchPost(id) {
  return posts.get(`/${id}`);
}

function createPost(postData) {
  return posts.post('/', postData);
}

function editPost(postData, postId) {
  return posts.put(`/${postId}`, postData);
}

function deletePost(id) {
  return posts.delete(`/${id}`);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
