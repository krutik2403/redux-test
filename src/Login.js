import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from './redux/actions/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit((values) => dispatch(loginUser(values)))}>
      <input
        type="email"
        name="email"
        ref={register}
        defaultValue="eve.holt@reqres.in"
        required
      />
      <input
        type="password"
        name="password"
        ref={register}
        defaultValue="cityslicka"
        required
      />
      <input type="submit" name="Submit" />
    </form>
  )
}

export default Login
