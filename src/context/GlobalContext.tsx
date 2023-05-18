import React, { createContext, useState, useEffect, useContext, ReactNode } from "react"

// interface para establecer los tipos que tendran las variables globales
interface ContextStatesTypes {
    windowWidth: number
}

// inicializacion de las variables globales
const initialValue: ContextStatesTypes = {
    windowWidth: 0,
}

// creacion del contexto
const Context = createContext(initialValue)


// interface para los tipo de los parametro recibidos como props
interface GlobalContextProps {
    children: ReactNode;
}

const GlobalContext: React.FC<GlobalContextProps> = ({children})=>{

    //estado global utilizado para obtener el ancho de la pantalla
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


// funcion que se utilizara en los componentes que necesiten acceder a los valores de este archivo, ya nos retone el useContext, 
// solo nos quedaria desestructurar la o las variables necesarias
export const useGlobalContext = () => {
    return useContext(Context)
}

