import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function TokenSend() {
    const [code, setCode] = useState(Array(6).fill(""))
    const inputsRef = useRef<(HTMLInputElement | null)[]>([])

    const nav = useNavigate()

    const inputSave =  async (value: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newCode = [...code]
        newCode[index] = value.target.value
        setCode(newCode)

        if(value && index < code.length - 1) {
            inputsRef.current[index + 1]?.focus()
        }
    }

    const handle = async () => {
        const idPending = sessionStorage.getItem("idPending")
        const token = code.join("")
        try {
            await axios.post("http://localhost:3000/create/token", {token, idPending})
            alert("conta criada com sucesso!!")
            nav("/home")
        } catch(error) {
            console.log(error)
        }

        nav('/') 
        // colocar o endereço para a próxima página!
    }

    const onkeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index:number) => {
        if(e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index -1]?.focus()
        }
    }

    return (
        <div className="flex h-screen w-screen">

            <div className="bg-slate-700 w-[45%] h-full"/>

            <div className="ml-[24px]">
                <h1 className=" text-[48px] font-sans font-semibold">Criar conta</h1>
                <p className=" text-[20px] font-normal h-[82px] w-[565px]">Um token foi enviado para o email informado, insira o token para 
                    finalizar o processo de criacao da sua conta.
                </p>

                <div className="flex mt-[38px] gap-[380px]">
                    <h2 className="font-sans font-semibold text-[26px] text-black/70">Passo 1</h2>
                    <h3 className="font-sans font-semibold text-[26px] text-black/70">Passo 2</h3>
                </div>

                <div className="w-[683px] h-[13px] bg-black/5 rounded-[20px]">
                    <div className="h-[12px] w-[100%]  bg-azulButton rounded-[20px]"/>
                </div>

                <h1 className="mt-[73px] text-[26px] font-normal text-black/85">Token</h1>
                <form>
                    <div className="flex gap-[9px]">
                        
                        {code.map((value, index) => (
                            <input
                                key={index}
                                ref={el => {inputsRef.current[index] = el}}
                                value={value}
                                type="text" 
                                inputMode="numeric"
                                    maxLength={1}
                                    onChange={e => inputSave(e, index)}
                                    onKeyDown={e => onkeyDown(e, index)}
                                    className="w-[80px] h-[55px] border-[3px] border-bordas rounded-[10px] focus:outline-none pl-[28px] font-semibold text-[25px]"
                                />    
                            ))
                        }

                    </div>
                </form>
                    
                <button type="button" className="bg-azulButton w-[220px] h-[60px] rounded-[15px] text-white ml-[165px] active:bg-black hover:bg-azulButton mt-[60px]"
                        onClick={() => handle()}>
                            Validar Token
                </button>
            </div>
        </div>
    )
}