import axios from 'axios'

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_PENDING' })
    axios
      .post('https://reqres.in/api/login', credentials)
      .then((res) => {
        dispatch({ type: 'LOGIN_SUCCESS', token: res.data.token })
      })
      .catch((error) => {
        dispatch({
          type: 'LOGIN_FAILURE',
          message: error.response.data.message,
          errors: error.response.data.errors,
        })
      })
  }
}
