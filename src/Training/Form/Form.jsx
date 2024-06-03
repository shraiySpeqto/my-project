import React, { useEffect, useState, CSSProperties } from "react";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import img from './images/form_image.png'
const Form = () => {
  let inputValues = { userName: "", email: "", password: "", confirm: "" };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [formValues, setFormValues] = useState(inputValues);
  let [formErrors, setFormErrors] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);
  let [isLoading, setIsLoading] = useState(false);;
  let handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setIsLoading(true);
    console.log("submitted");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      resetForm();

      toast.success("Form submitted successfully!");
    } else if (isSubmit) {
      toast.error(
        "Form submission failed. Please correct the errors and try again."
      );
      setIsLoading(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const error = {};
    var regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.userName) {
      error.userName = "User Name is required";
    }
    if (!values.email) {
      error.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      error.email = "Enter Valid Email";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 5) {
      error.password = "Password must be more than 5 charaters";
    } else if (values.password.length > 10) {
      error.password = "Password Cannot exceed more than 10 charaters";
      console.log("sucess");
    }

    if (!values.confirm) {
      error.confirm = "Confirm Your Password ";
    }
    if (values.confirm !== values.password) {
      error.confirm = "Password and Confirm Password Does not match";
    }

    console.log(error);
    return error;
  };

  const resetForm = () => {
    setFormValues(inputValues);
    setIsSubmit(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="cmcontainer">
      <div  className="inner_container d-flex justify-content-center">
        
        <div className="form_container">
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-column align-items-center bg-transparent "
        >
          <div className="ui_form border ">
            <div>
              <h1 className="fs-1.5">Registration Form</h1>
            </div>

            <div className="form_feilds text-center" >
              <div className="d-flex justify-content-center flex-column">
                <input
                  type="text"
                  placeholder="Name"
                  name="userName"
                  value={formValues.userName}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.userName}</p>
              <div className="d-flex justify-content-center flex-column">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>

              <div className="d-flex justify-content-center flex-column">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>

              <div className="d-flex justify-content-center flex-column">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm"
                  value={formValues.confirm}
                  onChange={handleChange}
                />
              </div>

              <p>{formErrors.confirm}</p>

              <button className="cm_btn " disabled={isLoading}>
                {isLoading ? (
                  <ClipLoader
                    color="#36d7b7"
                    cssOverride={{}}
                    size={25}
                    speedMultiplier={1}
                  /> 
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="img">
          <img src={img} alt="img" height="615px" width="537px" />
        </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Form;
