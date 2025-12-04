export function CreateCount() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center w-[800px] h-[600] bg-slate-600">

                <div className="bg-slate-900 w-1/2 h-full"/>

                <div className="">
                    <h1>Criar conta</h1>
                    <p>Antes de continuar, confirme seu email para receber o token de avitação</p>

                    <div>
                        <h2>Passo 1</h2>
                        <h3>Passo 2</h3>
                    </div>
                    <div>
                        linha
                    </div>

                    <p>Nome da empresa</p>
                    <input type="text" placeholder="Loja do seu zé"/>

                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com"/>
                    
                    <div>    
                        <p>Senha</p>
                        <input type="password" placeholder="*******"/>
        
                        <p>Telefone</p>
                        <input type="number" placeholder="+55 (43) 91212-2121"/>
                    </div>

                    <div>
                        <p>CNPJ</p>
                        <input type="number" placeholder="00.000.000/0000-00"/>

                        <button type="button">Enviar Token</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}