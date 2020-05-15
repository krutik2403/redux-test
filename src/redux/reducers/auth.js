const initialState = {
  loading: true,
  error: null,
  token: null,
}

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        loading: true,
        errors: false,
        token: null,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        errors: false,
        token: action.token,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        token: null,
      }
    default:
      return { ...state }
  }
}

export default authReducers
