import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Login = () => {
  return (
    <div>
   
<div className='row'>
<div className='col-lg-4'></div>
<div className='col-lg-4'>
   <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<div className='col-lg-4'></div>
</div>
    </div>
  )
}

export default Login