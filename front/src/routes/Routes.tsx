import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../initPage/createCount/index";
import { TokenSend } from "../initPage/tokenSend";
import { Login } from "../initPage/loginCount";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<CreateCount /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/token" element={<TokenSend /> }/>
        </Routes>
    )
}