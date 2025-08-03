import { createContext, useContext, useState, type ReactNode } from "react";

type NameContextType = {
    name: string | null
    getName: (name: string) => void
    cleanName: () => void
}

const NameContext = createContext<NameContextType>({
    name: null,
    getName: () => {},
    cleanName: () => {}
})

const initialName: string | null = window.localStorage.getItem('name') || null

function NameProvider ({children}: {children: ReactNode}) {
    const [name, setName] = useState<string | null>(initialName)

    const getName = (name: string) => {
        setName(name)
        window.localStorage.setItem('name', name)
    }

    const cleanName = () => {
        setName(null)
        window.localStorage.removeItem('name')
    }

    return (
        <NameContext.Provider value={{name, getName, cleanName}}>
            {children}
        </NameContext.Provider>
    )
}

const useName = () => useContext(NameContext)

export {useName, NameProvider}