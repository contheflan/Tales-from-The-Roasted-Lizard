import api from './apiConfig';

export const getAllPostings = async () => {
  const resp = await api.get('/postings');
  return resp.data;
}

export const getOnePosting = async (id) => {
  const resp = await api.get(`/postings/${id}`);
  return resp.data;
}

export const postPosting = async (postingData) => {
  const resp = await api.post('/postings', { posting: postingData });
  return resp.data;
}

export const putPosting = async (id, postingData) => {
  const resp = await api.put(`/postings/${id}`, { posting: postingData });
  return resp.data;
}

export const destroyPosting = async (id) => {
  const resp = await api.delete(`/postings/${id}`);
  return resp;
}