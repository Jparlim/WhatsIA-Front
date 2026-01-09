import IA from "../../../Images/Tool.png"
import client from "../../../Images/Users.png"
import financial from "../../../Images/Bar chart-2.png"
import calendar from "../../../Images/Calendar.png"
import menu from "../../../Images/Menu.png"
import home from "../../../Images/Home (1).png"
import clipboard from "../../../Images/Clipboard.png"
import { useState } from "react"
import { Calendar } from "../../fullCalendar"
import plus from "../../../Images/Plus.png"

export function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-backGround h-screen flex items-center justify-center">
            <div className="w-[95%] h-[95%] flex rounded-[20px] shadow-2xl bg-white">

                {!isOpen ? (
                    <div className="flex flex-col gap-[25px] w-[230px] h-[95%] border-l-border border-r-[2px] mt-4">

                        <div className="flex items-center gap-5 mt-5 pl-[25px]">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className={`text-[22px] transition-all duration-500 ${!isOpen ? "translate-x-[0px]" : "translate-x-[10px]"}`}>Dashboard</h1>
                        </div>
                        
                        <div className={`flex flex-col gap-[10px] mt-[10px] transition-all duration-500 ${!isOpen ? "translate-x-[0px]" : "translate-x-[10px]"} opacity-100`}>
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={home} className="size-[25px] " alt="" />
                                <p className="text-[15px] ">Tela inicial</p>
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
                ) : (
                    <div className={`flex flex-col gap-[25px] h-[95%] mt-4`}>

                        <div className="flex items-center gap-5 mt-5 pl-[25px] ">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className="text-[22px] transition-all duration-500 -translate-x-[10px] opacity-0 pointer-events-none">Dashboard</h1>
                        </div>

                        <div className={`flex-col mt-[10px] transition-all duration-500 -translate-x-[20px] opacity-0 pointer-events-none`}>
                            <div className="flex items-center gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={home} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Tela inicial</p>
                            </div>

                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={clipboard} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Estoque</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={IA} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Configuração IA</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={client} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Clientes</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={financial} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Financeiro</p>
                            </div>
                            
                            <div className="flex items-center mt-[10px] gap-4 pl-8 hover:cursor-pointer hover:bg-azulButton h-[60px] transition-colors duration-200 rounded-bl-[10px] rounded-tl-[10px]">
                                <img src={calendar} className="size-[25px] " alt="" />
                                <p className="text-[15px]">Agenda</p>
                            </div>
                        </div>

                    </div>
                )}

                <div className="">

                    <div className="flex justify-around w-full">
                        <h1 className="text-[40px] font-sans font-semibold mt-2 ml-6">Visitas Agendadas</h1>
                        
                        <button className="bg-azulButton w-[170px] h-[50px] rounded-[15px] text-white ml-[133px] active:bg-black hover:bg-azulButton mt-[15px] flex items-center justify-center gap-[6px]">
                            <img src={plus} alt="" className="size-6"/>
                            Adicionar visita
                        </button>
                    </div>

                    <div className="flex gap-8 w-full h-full mt-6">
                        <Calendar />

                        <div className="border-bordas border-[1px] w-[35%] h-[70%]">
                            <div>
                                <p>Nome</p>
                                <p>Data</p>
                                <p>Horário</p>
                            </div>
                            <li>
                                {/* Here will be the list of scheduled visits */}
                                <div>
                                    <p>João Silva</p>
                                    <p>25/06/2024</p>
                                    <p>14:00</p>
                                    <button>
                                        <img src={plus} alt="" className=""/>
                                    </button>
                                    <button>
                                        <img src="" alt="" />
                                    </button>
                                </div>
                            </li>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}