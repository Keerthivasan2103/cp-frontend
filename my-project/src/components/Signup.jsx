import React from "react";

export function SignUp() {
  const url = import.meta.env.BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post().then().catch() 
  };
  return (
    <>
      <section>
        <div className="flex justify-center items-center h-screen">
          <div className="home">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="userName">UserName</label>
              <input type="text" name="userName" id="userName" />
              <label htmlFor="email">email</label>
              <input type="text" name="email" id="email" />
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" name="phoneNumber" id="phoneNumber" />
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" />
              <button>Register</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
