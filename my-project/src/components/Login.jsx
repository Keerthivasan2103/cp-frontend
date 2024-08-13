import React from 'react'

function Login() {
  return(
    <div>
    <section className='bg-slate-800 border border-slate-600 rounded-md shadow-lg backdrop-filter backdrop-blue-lg bg-opacity-30 relative '>
      <h1 className='text-4xl font-bold text-center'>Login</h1>
      <form action ="">
        <div className='relative my-4 '>
          <input type="text" name="UserName" id="username" className='block w-72 py-2.5 px-0 text-sm text-white bg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 ' />
          <label htmlFor="username">Username or email</label>
        </div>
        <div className='relative my-4'>
          <input type="password" name="Password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Login