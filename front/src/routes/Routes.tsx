import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../initPages/createCount/index";
import { TokenSend } from "../initPages/tokenSend";
import { Login } from "../initPages/loginCount";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<CreateCount /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/token" element={<TokenSend /> }/>
        </Routes>
    )
}