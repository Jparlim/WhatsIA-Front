import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {

    const nav = useNavigate()

    const [ email, setDataEmail ] = useState('')
    const [ senha, setDataPassword ] = useState('')
    
    const handle =  async () => {
        const list = [email, senha]

        if(list.some(str => str.length === 0)) return alert('existem campos vazios!')

        try{
            await axios.post('http://localhost:3000/login', {email, senha})
            nav('')
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex w-[1382px] h-[70%] rounded-[20px] shadow-2xl bg-white relative">
                <div className="ml-[115px] w-screen">
                    <h1 className=" text-[52px] font-sans font-semibold mt-[30px]">Login</h1>
                    <p className="text-[22px] font-normal h-[82px] w-[565px] mt-2">Bem vindo de volta a Quantyum!</p>
                    <div className="flex flex-col gap-6 mt-[30px]">
                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Email</p>
                            <input type="text" className="w-[40%] h-[45px] border-current-bordas border-[2px] rounded-[5px] pl-3 focus:outline-none" 
                            onChange={e => setDataEmail(e.target.value)}/>
                        </div>

                        <div>
                            <p className="font-sans font-semibold text-[20px] text-black/85">Senha</p>
                            <input type="text" className="w-[40%] h-[45px] border-current-bordas border-[2px] rounded-[5px] pl-3 focus:outline-none"
                            onChange={e => setDataPassword(e.target.value.toString())}/>
                        </div>
                    </div>

                    
                    <button type="button" className="bg-azulButton w-[220px] h-[60px] rounded-[15px] text-white active:bg-black hover:bg-azulButton mt-[30px] ml-0"
                    onClick={() => handle()}>
                        Enviar Token
                    </button>
                </div>

                <div className="bg-slate-700 w-[582px] h-full rounded-r-[20px] absolute right-0"/>
            </div>
        </div>
    )
}