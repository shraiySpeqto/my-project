import React from 'react'

const Form = () => {
  return (
    <div>

<div className="form_container">
          <form>
            <div>
              <h1 className="fs-1.5">Sign Up</h1>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <label>Email Address</label>
              <input type="text" placeholder="Name" name="userName" />
            </div>
            <div className="d-flex justify-content-center flex-column">
              <label>Create Password</label>
              <input type="text" placeholder="Name" name="userName" />
            </div>
            <FormCheck
              type="checkbox"
              label="Accept Terms of Service and Privacy Policy"
            />
            <button className="cm_btn">Sign Up</button>
            <div>
                <div>Already have an account?</div>
                <button>Login</button>
            </div>
            <div>or continue with</div>
            <div>
                
                <button>Google</button>
                <button>Apple</button>
            </div>
          </form>
          <div className="image">
            <img src={img} alt="" height="537px" width="615px" />
          </div>
        </div>
    </div>
  )
}

export default Form