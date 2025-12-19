import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function CreateCount() {

    const [ nome, setNameEmpresa ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ numero, setTelefone ] = useState('')
    const [ CNPJ, setCNPJ ] = useState('')

    const nav = useNavigate();

    const validation = async () => {
        const list = [
            nome,
            email,
            senha,
            numero,
            CNPJ
        ]

        if(list.some(str => str === "")) {
            return alert("existem campos vazios que são obrigatórios!")
        }

        try {
            const data = await axios.post("http://localhost:3000/create", {nome, email, senha, numero, CNPJ})
            
            sessionStorage.setItem('idPending', data.data.id)

            console.log(data.data.token)

            nav("/token")
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex w-[1382px] h-[650px] rounded-[20px] shadow-2xl bg-white">

                <div className="bg-slate-700 w-[582px] h-full rounded-l-[20px]"/>

                <div className="mt-[16px] ml-[24px]">
                    <h1 className=" text-[52px] font-sans font-semibold">Criar conta</h1>
                    <p className=" text-[22px] font-normal h-[82px] w-[565px]">Antes de continuar, confirme seu email para receber o token de avitação</p>

                    <div className="flex mt-[38px] gap-[380px]">
                        <h2 className="font-sans font-semibold text-[28px] text-black/70">Passo 1</h2>
                        <h3 className="font-sans font-semibold text-[28px] text-black/40">Passo 2</h3>
                    </div>

                    <div className="w-[683px] h-[13px] bg-black/5 rounded-[20px]">
                        <div className="h-[13px]  w-[50%]  bg-azulButton rounded-[20px]"/>
                    </div>
                    
                    <div className="flex flex-col mt-[30px] gap-[10px]">
                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Nome da empresa</p>
                            <input key={"nomeEmpresa"} type="text" placeholder="Loja do seu zé" className="w-[683px] h-[45px] border-current-bordas border-[3px] rounded-[5px] focus:outline-none pl-3"
                            onChange={e => setNameEmpresa(e.target.value)} value={nome}/>
                        </div>

                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Email</p>
                            <input type="text" placeholder="example@gmail.com" className="w-[683px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                            onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        
                        <div className="flex gap-[84px]">
                            <div>
                                <p className="font-sans font-semibold text-[20px] text-black/85">Senha</p>
                                <input type="password" placeholder="*******" className="w-[300px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                                onChange={e => setSenha(e.target.value)} value={senha}/>                
                            </div>    

                            <div>
                                <p className="font-sans font-semibold text-[20px] text-black/85">Telefone</p>
                                <input type="text" placeholder="+55 (43) 91212-2121" className="w-[300px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                                onChange={e => setTelefone(e.target.value)} value={numero}/>
                            </div>
                        </div>

                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85 mb-[-10px]">CNPJ</p>
                            <input type="text" placeholder="00.000.000/0000-00" className="w-[300px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                            onChange={e => setCNPJ(e.target.value)} value={CNPJ}/>

                            <button type="button" className="bg-azulButton w-[220px] h-[60px] rounded-[15px] text-white ml-[165px] active:bg-black hover:bg-azulButton"
                                onClick={() => validation()}
                            >Enviar Token</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}