import { useRef } from "react"
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react"



const FormUser = ({handleLoginEmail, handleRegisterEmail}) => {
    const inputEmailLogin = useRef();
    const inputPassLogin = useRef();
    const inputEmailRegister = useRef();
    const inputPassRegister = useRef();

    const handleLogin = () => {
        const email = inputEmailLogin.current.value;
        const password = inputPassLogin.current.value;
        handleLoginEmail(email,password);
    }

    const handleRegister = () => {
        const email = inputEmailRegister.current.value;
        const password = inputPassRegister.current.value;
        handleRegisterEmail(email,password);
    }




  return (
    <TabGroup>
        <TabList className="flex gap-4">
        <Tab
                
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-blue-500 data-[selected]:data-[hover]:bg-blue/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                
              Ingresa</Tab>
              <Tab
                
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-blue-500 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                
              Registrate</Tab>

        </TabList>
        <TabPanels>
            <TabPanel>
            <div className="min-w-96 p-3 mb-4 block">
            <div>
                <label className="text-sm font-semibold
                mb-1 ">Email
                </label>
                <input className="border-2 p-1 h-12 w-full" ref={inputEmailLogin}/>
            '
            </div>
            <div className="mb-2">
            <label className="text-sm font-semibold
            mb-1 ">Password
            </label>
            <input className="border-2 p-1 h-12 w-full" type="password" ref={inputPassLogin}/>

           </div>
           <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800" onClick={handleLogin}>Ingrese</button>
           </div>
           </TabPanel>


           <TabPanel>
            <div className="min-w-96 p-3 mb-4 block">
            <div>
                <label className="text-sm font-semibold
                mb-1">Email
                </label>
                <input className="border-2 p-1 h-12 w-full" ref={inputEmailRegister}/>
            '
            </div>
            <div className="mb-2">
            <label className="text-sm font-semibold
            mb-1 " >Password
            </label>
            <input className="border-2 p-1 h-12 w-full" type="password" ref={inputPassRegister}/>

           </div>
           <button className="bg-sky-700 w-full h-16 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800" onClick={handleRegister}>Registrate</button>
           </div>
           </TabPanel>
           
           </TabPanels>
            
    </TabGroup>
  )
}

export default FormUser