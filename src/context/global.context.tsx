import React from 'react'

type GlobalProvider = GlobalState & {
  showSettings: boolean
  toggleSettings: () => void
}

export const GlobalContext = React.createContext<GlobalProvider>({
  showSettings: false,
  toggleSettings: () => {},
})

export const GlobalContextProvider = ({ children, ...value }: GlobalContextProviderProps) => {
  const [showSettings, setShowSettings] = React.useState(false)
  const toggleSettings = () => {
    setShowSettings(!showSettings)
  }
  const providerValue = { ...value, toggleSettings, showSettings }
  return <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
  return React.useContext(GlobalContext)
}

export interface GlobalContextProviderProps extends GlobalState {
  children: React.ReactNode
}

export interface GlobalState {}
