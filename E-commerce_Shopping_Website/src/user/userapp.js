import { HashRouter, Routes, Route } from "react-router-dom";
import UserHeader from "./userheader";
import Myhome from "./shopping";
import Mycart from "./cart";
import Myregister from "./register";
import Mylogin from "./login";


const UserModule = () =>{
    return(
        <HashRouter>
            <UserHeader/>
            <Routes>
                <Route exact path = "/" element={<Myhome/>}/>
                <Route exact path = "/cart" element={<Mycart/>}/>
                <Route exact path = "/login" element={<Mylogin/>}/>
                <Route exact path = "/register" element={<Myregister/>}/>
            </Routes>

        </HashRouter>
    )
}

export default UserModule;