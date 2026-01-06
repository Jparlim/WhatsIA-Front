import IA from "../../../Images/Tool.png"
import client from "../../../Images/Users.png"
import financial from "../../../Images/Bar chart-2.png"
import calendar from "../../../Images/Calendar.png"
import menu from "../../../Images/Menu.png"
import home from "../../../Images/Home (1).png"
import clipboard from "../../../Images/Clipboard.png"

export function Home() {
    return (
        <div className="bg-backGround h-screen flex items-center justify-center">
            <div className="w-[95%] h-[95%] flex rounded-[20px] shadow-2xl bg-white">

                <div className="flex flex-col gap-[25px] w-[315px] h-[95%] border-l-border border-r-[2px] mt-4">

                    <div className="flex items-center gap-5 mt-5 pl-[25px]">
                        <img src={menu} className="size-8 hover:cursor-pointer" alt="" />
                        <h1 className="text-[22px]">Dashboard</h1>
                    </div>
                    
                    <div className="flex flex-col gap-[10px] mt-[10px]">
                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={home} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Tela inicial</p>
                        </div>

                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={clipboard} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Estoque</p>
                        </div>
                        
                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={IA} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Configuração IA</p>
                        </div>
                        
                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={client} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Clientes</p>
                        </div>
                        
                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={financial} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Financeiro</p>
                        </div>
                        
                        <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                            <img src={calendar} className="size-[25px] " alt="" />
                            <p className="text-[15px]">Agenda</p>
                        </div>
                    </div>

                </div>

                <div>
                    <h1 className="text-[40px] font-sans font-semibold">Visitas Agendadas</h1>
                </div>

            </div>
        </div>
    )
}