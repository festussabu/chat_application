import axios from 'axios'

async function loginAuth(username, password) {
  const response = await axios.post('http://localhost:8000/api/token/', {
    username: username,
    password: password
  });
  return response.data
}

export default loginAuth


