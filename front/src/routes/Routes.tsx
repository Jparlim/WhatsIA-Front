import { Routes, Route } from "react-router-dom";

import { CreateCount } from "../pages/createCount/index";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<CreateCount /> }/>
        </Routes>
    )
}