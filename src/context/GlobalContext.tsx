import React, { createContext, useState, useEffect, useContext } from "react"

interface ContextStatesTypes {
    windowWidth: number
}

const initialValue: ContextStatesTypes = {
    windowWidth: 0,
}

const Context = createContext(initialValue)

const GlobalContext: React.FC = ({children})=>{

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    // Función para actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    const handleResize: ()=> void = () => {
      setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        // Agrega el evento de escucha al tamaño de la ventana
        window.addEventListener('resize', handleResize)

        // Limpia el evento de escucha al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    const contextValue: ContextStatesTypes = {
        windowWidth,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default GlobalContext



export const useGlobalCOntext = () => {
    return useContext(GlobalContext)
}

