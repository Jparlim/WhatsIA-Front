import { useRef, useState } from "react"

export function TokenSend() {
    
    const [code, setCode] = useState(Array(6).fill(""))
    const inputsRef = useRef([])

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex w-[1382px] h-[650px] rounded-[20px] shadow-2xl bg-white">

                <div className="bg-slate-700 w-[582px] h-full rounded-l-[20px]"/>

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
                                    ref={el => (inputsRef.current[index] = el)}
                                    value={value}
                                    type="text" 
                                    inputMode="numeric"
                                    maxLength={1}
                                    onChange={e => {
                                        const newCode = [...code]
                                        newCode[index] = e.target.value
                                        setCode(newCode)
                                    }}

                                    className="w-[80px] h-[55px] border-[3px] border-bordas rounded-[10px] focus:outline-none pl-[28px] font-semibold text-[25px]"
                                />    
                            ))}

                            {/* <input type="numer" maxLength={1} inputMode="numeric" className="w-[80px] h-[55px] border-[3px] border-bordas rounded-[10px] focus:outline-none pl-[28px] font-semibold text-[25px]"/> */}
                            
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}