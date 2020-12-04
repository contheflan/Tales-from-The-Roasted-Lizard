import api from './apiConfig';

export const getAllComments = async () => {
  const resp = await api.get(`postings/comments`);
  return resp.data;
}

export const getOneComment = async (id, comment_id) => {
  const resp = await api.get(`postings/${id}/comments/${comment_id}`);
  return resp.data;
}

export const postComment = async (commentData, id) => {
  const resp = await api.post(`postings/${id}/comments`, { comment: commentData });
  return resp.data;
}

export const putComment = async (id, commentData, comment_id ) => {
  const resp = await api.put(`postings/${id}/comments/${comment_id}`, { comment: commentData });
  return resp.data;
}

export const destroyComment = async (id, comment_id) => {
  const resp = await api.delete(`postings/${id}/comments/${comment_id}`);
  return resp;
}