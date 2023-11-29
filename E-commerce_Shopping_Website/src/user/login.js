import { useState } from "react";
import swal from "sweetalert";

const Mylogin =()=>{
    let[email,pickEmail] = useState("");
    let[password,pickPassword] = useState("");

    const Login=()=>{
        let formStatus = true;

        //email validation
        var epatern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if(! epatern.test(email))
        {
            formStatus = false; 
        }

         //password validation
         if(password ==="")
         {
             formStatus = false; 
         }
         
         if (formStatus === false)
         {
             swal("Invalid Input ","Enter Login Details","warning");
         }
         else{
             //let url = "  http://localhost:1234/account?email=x@gmail.com&paswword=123";
             let url = "http://localhost:1234/account?email="+email+"&password="+password;
             fetch(url)
             .then(response=>response.json())
             .then(userinfo=>{
                if( userinfo.length>0 ){
                    localStorage.setItem("sellerid",userinfo[0].id);
                    localStorage.setItem("sellername",userinfo[0].name);
                    window.location.reload();
                }
                else{
                    swal("Login Fail !","Invalid or Not Exists", "warning");
                }
             })
         }


    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="border rounded p-4">
                        <h3 className="mb-4 text-center"><i className="fa fa-lock"></i> Login</h3>
                       
                        <div className="mb-3">
                            <label>Email-Id</label>
                            <input type="email" className="form-control"
                            value={email}
                            onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control"
                            value={password}
                            onChange={obj=>pickPassword(obj.target.value)}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={Login}>Login</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
export default Mylogin;