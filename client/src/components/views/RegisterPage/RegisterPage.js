import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter, Link } from "react-router-dom";
import { Row, Form, Input, Button, Checkbox, message } from "antd";

const onSubmitErrorHandler = (error_message) => {
  message.error({
    content: error_message,
    style: { marginTop: "10vh" },
  });
};

function RegisterPage(props) {
  const dispatch = useDispatch();

  // Create react states
  //   const [Email, setEmail] = useState("");
  //   const [Name, setName] = useState("");
  //   const [Password, setPassword] = useState("");
  //   const [ConfirmPassword, setConfirmPassword] = useState("");

  //   // Handling changes made in states
  //   const onEmailHandler = (event) => {
  //     setEmail(event.currentTarget.value);
  //   };
  //   const onNameHandler = (event) => {
  //     setName(event.currentTarget.value);
  //   };
  //   const onPasswordHandler = (event) => {
  //     setPassword(event.currentTarget.value);
  //   };
  //   const onConfirmPasswordHandler = (event) => {
  //     setConfirmPassword(event.currentTarget.value);
  //   };
  const onSubmitHandler = (values) => {
    // event.preventDefault();

    // if (Password !== ConfirmPassword) {
    //   return alert("Passwords do not match.");
    // }

    // let body = {
    //   email: Email,
    //   name: Name,
    //   password: Password,
    // };

    dispatch(registerUser(values)).then((response) => {
      console.log("Values:", values);
      console.log("Response:", response);

      // Check passwords
      //   if (values.password !== values.confirmPassword) {
      //     let error_message = "Passwords do not match.";
      //     return onSubmitErrorHandler(error_message);
      //   }

      // If successful
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100%",
    //     height: "95vh",
    //   }}
    // >
    //   <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
    //     <label>Email</label>
    //     <input type="email" value={Email} onChange={onEmailHandler} />

    //     <label>Name</label>
    //     <input type="text" value={Name} onChange={onNameHandler} />

    //     <label>Password</label>
    //     <input type="password" value={Password} onChange={onPasswordHandler} />

    //     <label>Confirm Password</label>
    //     <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

    //     <br />
    //     <button type="submit">Register</button>
    //   </form>
    // </div>
    <Row justify="center" align="middle" style={{ height: "95vh" }}>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: "27rem", padding: "4rem", border: "1px solid rgba(0, 0, 0, 0.10)" }}
        initialValues={{ remember: true }}
        onFinish={onSubmitHandler}
        // onFinishFailed={onSubmitErrorHandler}
      >
        {/* HEADER ---------------------------------------------------------*/}
        <h2 style={{ margin: "0 0 2rem 0" }}>Register</h2>

        {/* NAME -----------------------------------------------------------*/}
        <Form.Item
          label="Name"
          name="name"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type in your name.",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        {/* EMAIL ----------------------------------------------------------*/}
        <Form.Item
          label="Email"
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type in your email.",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>

        {/* PASSWORD -------------------------------------------------------*/}
        <Form.Item
          label="Password"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please type in your password.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* CONFIRM PASSWORD -----------------------------------------------*/}
        <Form.Item
          label="ConfirmPassword"
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Please make sure your passwords match."));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* TERMS AND CONDITIONS CHECKBOX ----------------------------------*/}
        <Form.Item
          name="conditions"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Please accept the terms and conditions.")),
            },
          ]}
          style={{ padding: "0 0 0.75rem 0" }}
        >
          <Checkbox>I accept the Terms of Use & Privacy Policy.</Checkbox>
        </Form.Item>

        {/* SUBMIT BUTTON --------------------------------------------------*/}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        {/* LINK -----------------------------------------------------------*/}
        <Form.Item>
          Already have an account? <Link to="/login">Sign in</Link>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default withRouter(RegisterPage);
