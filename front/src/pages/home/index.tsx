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
import axios from "axios"

const listTest = [
    {
        id: 1,
        name: "João Silva",
        date: "25/06/2024",
        time: "14:00"
    },
    {
        id: 1,
        name: "Ana Souza",
        date: "25/06/2024",
        time: "12:00"
    },
    {
        id: 1,
        name: "Maria Oliveira",
        date: "25/06/2024",
        time: "18:25"
    },
    {
        id: 1,
        name: "Maria Oliveira",
        date: "25/06/2024",
        time: "10:30"
    },
]

const handleDelete = async (index:number) => {
    try {
        await axios.delete(`http://localhost:3000/visits/delete/${index}`)
        return alert("Visita deletada com sucesso!")
    } catch (error) {
        console.log(error) 
        return alert("Erro ao deletar visita.")
    }
}

const sortedList = [...listTest].sort((a, b) => {
    const [HoraA, MinutoA] = a.time.split(':').map(Number);
    const [HoraB, MinutoB] = b.time.split(':').map(Number);

    const MinA = HoraA * 60 + MinutoA;
    const MinB = HoraB * 60 + MinutoB;

    return MinA - MinB;
})

export function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-backGround h-screen flex items-center justify-center">
            <div className="w-[95%] h-[95%] flex rounded-[20px] shadow-2xl bg-white relative">

                {!isOpen ? (
                    <div className="flex flex-col gap-[25px] w-[230px] h-[95%] border-l-border border-r-[2px] mt-4">

                        <div className="flex items-center mt-5 pl-[25px]">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className={`text-[22px] transition-all duration-500 translate-x-[15px]`}>Dashboard</h1>
                        </div>
                        
                        <div className={`flex flex-col gap-[10px] mt-[10px] transition-all duration-500 opacity-100`}>
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
                    <div className={`flex flex-col gap-[25px] h-12 mt-4 absolute`}>

                        <div className="flex items-center mt-5 pl-[25px]">
                            <button type="button" className="absolute" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menu} className="size-8 hover:cursor-pointer active:scale-[90%]" alt="" />
                            </button>
                            <h1 className={`text-[22px] transition-all duration-100 -translate-x-0 opacity-0 pointer-events-none`}>Dashboard</h1>
                        </div>

                        {/* olhar a div de baixo e comparar com o h1, o de baixo está certo, se copiar funcionna */}

                        <div className={`flex-col mt-[10px] transition-all duration-100 -translate-x-[20px] opacity-0 pointer-events-none`}>
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

                <div className={`w-full h-full pr-6`}>

                    <div className={`flex justify-between w-full h-[10%]`}>
                        <h1 className={`text-[40px] font-sans font-semibold mt-2 ml-6 ${!isOpen ? '' : 'pl-20'}`}>Visitas Agendadas</h1>
                        
                        <button className="bg-azulButton w-[170px] h-[50px] rounded-[15px] text-white active:bg-black hover:bg-azulButton flex items-center justify-center gap-[6px] mt-12">
                            <img src={plus} alt="" className="size-6"/>
                            Adicionar visita
                        </button>
                    </div>

                    <div className="flex gap-8 w-full h-[85%] mt-6 pb-4">
                        <Calendar />

                        <div className="border-bordas border-[1px] w-full h-full rounded-[10px] flex flex-col">
                            <div className="grid grid-cols-[2fr_2fr_1fr_50px] px-8 py-3 border-b-2 border-bordas">
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Nome</p>
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Data</p>
                                <p className="text-[17px] text-black/50 font-sans font-semibold">Horário</p>
                            </div>
                            <ul className={`flex flex-col flex-1 list-none gap-2 overflow-y-auto`}>

                                {sortedList.map((item) => (
                                    <li className="grid grid-cols-[2fr_2fr_1fr_50px] px-4 py-4 border-b-2 border-bordas items-center">
                                        <p>{item.name}</p>
                                        <p>{item.date}</p>
                                        <p>{item.time}</p>
                                        <div className="flex gap-3 size-6 ">
                                            <img src={pen} className="hover:cursor-pointer"/>
                                            <img src={trash} className="hover:cursor-pointer" onClick={() => handleDelete(item.id)} />
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