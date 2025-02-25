import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { GlobalErrorHandlerType } from "./types/error.type"


 
const GlobalErrorHandlerContextProvider = ({children}:{children:React.ReactElement}) => {
  const [errors,setErrors] = useState<GlobalErrorHandlerType[]>([] as GlobalErrorHandlerType[])

  const addError = useCallback((error:GlobalErrorHandlerType) => {
    setErrors([...errors,error])
  },[setErrors,errors])

  const removeError = useCallback(()=>(error:GlobalErrorHandlerType) => {
    setErrors(errors.filter(err => err.message !== error.message))
  },[setErrors,errors])

  const clearAllErrors = useCallback(() => {
    setErrors([])
  },[setErrors])

  const value = useMemo(() => ({errors,addError,removeError,clearAllErrors}),[errors,addError,removeError,clearAllErrors])

  return (
    <GlobalErrorHandlerContext.Provider value={value}>
        {children}
    </GlobalErrorHandlerContext.Provider>
  )
}

interface  GlobalErrorHandlerContextType {
    errors:GlobalErrorHandlerType[],
    addError:(error:GlobalErrorHandlerType)=>void,
    removeError:(error:GlobalErrorHandlerType)=>void,
    clearAllErrors:()=>void
}

const GlobalErrorHandlerContext = createContext<GlobalErrorHandlerContextType>({} as GlobalErrorHandlerContextType)

export const useGlobalErrorHandlerContext =()=> useContext(GlobalErrorHandlerContext)

export default GlobalErrorHandlerContextProvider