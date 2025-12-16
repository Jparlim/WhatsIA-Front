import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../pages/createCount/index";
import { TokenSend } from "../pages/tokenSend";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<CreateCount /> }/>
            <Route path="/token" element={<TokenSend /> }/>
        </Routes>
    )
}