//Action will redirect to Home Page

// import React, { useState } from "react";
// import "./signin.css";

// function SignIn() {
//   const [name] = useState({
//     email: "",
//     password: "",
//   });
//   const inputEvent = (event) => {
//     console.log(event.target.value);

//   };
//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("Sign In Successfull");
//     console.log(name);
//   };
//   return (
//     <div class="bg-img">
//       <form onSubmit={onSubmits}>
//         <h1 className="h"> Sign into your Account</h1>
//         <br />
//       </form>

//       <form action="/" class="container">
//         <h1>SIGN IN</h1>
//         <br />

//         <label for="email">
//           <b>Email</b>
//         </label>
//         <input
//           type="text"
//           placeholder="Enter Email"
//           name="email"
//           required
//           onChange={inputEvent}
//         />

//         <label for="psw">
//           <b>Password</b>
//         </label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="psw"
//           required
//           onChange={inputEvent}
//         />

//         <button type="submit" class="btn">
//           SignIn
//         </button>
//       </form>
//     </div>
//   );
// }
// export default SignIn;




//Action will show alert Box

import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./signin.css";

export default function FormValidation() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Signed In");
  };
  return (
    <div class="bg-img">
      <Form onSubmit={handleSubmit(onSubmit)} className="container">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" required="true" />
        </Form.Field>
        {errors.firstName && <p>Please check the First Name</p>}
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" type="text" required="true" />
        </Form.Field>
        {errors.lastName && <p>Please check the Last Name</p>}
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" required="true" />
        </Form.Field>
        {errors.email && <p>Please check the Email</p>}
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" required="true" />
        </Form.Field>
        {errors.password && <p>Please check the Password</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
