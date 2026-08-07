import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

const KEY = 'gm_session_id';

export const getSessionId = () => {
  let s = localStorage.getItem(KEY);
  if (!s) {
    s = (crypto?.randomUUID && crypto.randomUUID()) || `sess-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(KEY, s);
  }
  return s;
};

export const api = axios.create({ baseURL: API, timeout: 15000 });
