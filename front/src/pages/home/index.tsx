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
import pen from "../../../Images/Icon.png"
import trash from "../../../Images/Icon (1).png"

const listTest = [
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },

]

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

                <div className="w-full h-full">

                    <div className="flex justify-between w-full">
                        <h1 className="text-[40px] font-sans font-semibold mt-2 ml-6">Visitas Agendadas</h1>
                        
                        <button className="bg-azulButton w-[170px] h-[50px] rounded-[15px] text-white ml-[133px] active:bg-black hover:bg-azulButton mt-[15px] flex items-center justify-center gap-[6px]">
                            <img src={plus} alt="" className="size-6"/>
                            Adicionar visita
                        </button>
                    </div>

                    <div className="flex gap-8 w-full h-[85%] mt-6">
                        <Calendar />

                        <div className="border-bordas border-[1px] w-[48%] h-[83%] rounded-[10px]">
                            <div className="flex flex-col w-full">
                                <div className="flex gap-4 justify-between pl-[30px] pr-[120px] pt-[20px] border-b-2 border-bordas w-[97%] m-auto">
                                    <p className="text-[17px] text-black/50 font-sans font-semibold">Nome</p>
                                    <p className="text-[17px] text-black/50 font-sans font-semibold">Data</p>
                                    <p className="text-[17px] text-black/50 font-sans font-semibold">Horário</p>
                                </div>
                            </div>
                            <ul className={`flex flex-col list-none gap-2 h-[470px] overflow-y-auto`}>
                                {/* Here will be the list of scheduled visits */}

                                {listTest.map((item) => (
                                    <li className="flex list-none gap-2 justify-between items-center border-b-[2px] w-[97%] h-[35px] pl-[20px] pr-[20px] m-auto">
                                        <p>{item.name}</p>
                                        <p>{item.date}</p>
                                        <p>{item.time}</p>
                                        <div className="flex gap-2 size-5 mr-4">
                                            <img src={pen} className="hover:cursor-pointer" alt="" />
                                            <img src={trash} className="hover:cursor-pointer" alt="" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}