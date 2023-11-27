import { createContext, useContext, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles

const AppContext = createContext()

export const AppProvide = ({ children }) => {
 useEffect(() => {
   AOS.init({ duration: 1500, easing: 'ease' }) // Initialize the library
 }, [])
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
