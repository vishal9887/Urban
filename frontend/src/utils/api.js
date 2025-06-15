import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchBlogs = async (params = {}) => {
  const res = await axios.get(`${API_BASE}/blogs`, { params });
  return res.data;
};
