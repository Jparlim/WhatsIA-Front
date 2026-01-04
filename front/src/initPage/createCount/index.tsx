import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import property0 from '../../../Images/Property 1=interface, Property 2=outline, Property 3=lock 01.svg'
import property1 from '../../../Images/Property 1=interface, Property 2=outline, Property 3=unlock 01.svg'


export function CreateCount() {
    
    const nav = useNavigate();

    const [ nome, setNameEmpresa ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ numero, setTelefone ] = useState('')
    const [ CNPJ, setCNPJ ] = useState('')

    const [ seePassword, SetSeePassword ] = useState(false)
    const [ imgUnlock, setImgUnlock ] = useState(false)

    const handlePass = () => {
        SetSeePassword(prev => !prev)
        return setImgUnlock(prev => !prev)
    }

    const format = (data:string) => {
        return data.replace(/\D/g, '');
    }

    const formatarTelefone = (valor: string) => {
        if (valor.length === 0) return '';

        if (valor.length <= 2) return valor;
        if (valor.length <= 4) return `${valor.slice(0, 2)} (${valor.slice(2)}`;
        if (valor.length <= 9)
            return `${valor.slice(0, 2)} (${valor.slice(2, 4)}) ${valor.slice(4)}`;
        if (valor.length <= 13)
            return `${valor.slice(0, 2)} (${valor.slice(2, 4)}) ${valor.slice(4, 9)}-${valor.slice(9)}`;

        return `${valor.slice(0, 2)} (${valor.slice(2, 4)}) ${valor.slice(4, 9)}-${valor.slice(9, 13)}`;
    }

    const formatCNPJ = (valor: string) => {
        if(valor.length === 0) return '';

        if(valor.length <= 2) return valor;
        if(valor.length <= 5) return `${valor.slice(0, 2)}.${valor.slice(2)}`
        if(valor.length <= 8) return `${valor.slice(0, 2)}.${valor.slice(2, 5)}.${valor.slice(5, 8)}`
        if(valor.length <= 12) return `${valor.slice(0, 2)}.${valor.slice(2, 5)}.${valor.slice(5, 8)}/${valor.slice(8, 12)}`
        if(valor.length <= 14) return `${valor.slice(0, 2)}.${valor.slice(2, 5)}.${valor.slice(5, 8)}/${valor.slice(8, 12)}-${valor.slice(12, 14)}`
    }

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
            <div className="flex w-[1382px] h-[70%] rounded-[20px] shadow-2xl bg-white">

                <div className="bg-slate-700 w-[582px] h-full rounded-l-[20px]"/>

                <div className="ml-[24px]">
                    <h1 className=" text-[52px] font-sans font-semibold">Criar conta</h1>
                    <p className=" text-[22px] font-normal h-[82px] w-[565px]">Antes de continuar, confirme seu email para receber o token de avitação</p>

                    <div className="flex mt-[38px] gap-[380px]">
                        <h2 className="font-sans font-semibold text-[28px] text-black/70">Passo 1</h2>
                        <h3 className="font-sans font-semibold text-[28px] text-black/40">Passo 2</h3>
                    </div>

                    <div className="w-[600px] h-[13px] bg-black/5 rounded-[20px]">
                        <div className="h-[13px]  w-[50%]  bg-azulButton rounded-[20px]"/>
                    </div>
                    
                    <div className="flex flex-col mt-[30px] gap-[10px]">
                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Nome da empresa</p>
                            <input key={"nomeEmpresa"} type="text" placeholder="Loja do seu zé" className="w-[600px] h-[45px] border-current-bordas border-[3px] rounded-[5px] focus:outline-none pl-3"
                            onChange={e => setNameEmpresa(e.target.value)} value={nome}/>
                        </div>

                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Email</p>
                            <input type="text" placeholder="example@gmail.com" className="w-[600px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                            onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        
                        <div className="flex gap-[100px]">
                            <div>
                                <p className="font-sans font-semibold text-[20px] text-black/85">Senha</p>
                                <div className="flex relative">
                                    <input type={seePassword ? 'text' : 'password'} placeholder="*******" className="w-[250px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-[40px] focus:outline-none"
                                    onChange={e => {
                                        setSenha(e.target.value)
                                    }} 
                                    value={senha}/> 
                                    <img src={imgUnlock ? property0 : property1} className="absolute top-1 translate-x-[10px] translate-y-[6px] size-6 hover:cursor-pointer" onClick={() => handlePass()}/>         
                                </div>
                            </div>    

                            <div>
                                <p className="font-sans font-semibold text-[20px] text-black/85">Telefone</p>
                                <input type="text" placeholder="+55 (43) 91212-2121" className="w-[250px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                                onChange={e => {
                                        const data = format(e.target.value).slice(0, 13)
                                        setTelefone(data)
                                    }} 
                                value={formatarTelefone(numero)}
                                />
                            </div>
                        </div>

                        <div className="flex">
                            <div>
                                <p className="font-sans font-semibold text-[20px] text-black/85">CNPJ</p>
                                <input type="text" placeholder="00.000.000/0000-00" className="w-[250px] h-[45px] border-current-bordas border-[3px] rounded-[5px] pl-3 focus:outline-none"
                                onChange={e => {
                                    const data = format(e.target.value).slice(0, 14)
                                    setCNPJ(data)
                                }} 
                                value={formatCNPJ(CNPJ)}
                                maxLength={18}/>
                            </div>

                            <button type="button" className="bg-azulButton w-[220px] h-[60px] rounded-[15px] text-white ml-[133px] active:bg-black hover:bg-azulButton mt-[15px]"
                                onClick={() => validation()}
                            >Enviar Token</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}