import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../initPages/createCount/index";
import { TokenSend } from "../initPages/tokenSend";
import { Login } from "../initPages/loginCount";
import { Home } from "../pages/home";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<CreateCount /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/token" element={<TokenSend /> }/>
            <Route path="/home" element={<Home /> }/>
        </Routes>
    )
}