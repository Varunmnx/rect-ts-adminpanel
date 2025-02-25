import {  useState } from "react"
import useApiQueryData from "../../hooks/useApiQueryData"
import { useQueryClient } from "@tanstack/react-query";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";
// import { queryClient } from "../../main"

 

const LandingPage = () => {
  const queryClient = useQueryClient();
  const [count, setCount] = useState(0)
  useApiQueryData({

    queryFn: ()=>{
      console.log("running")
      return 10
    },
    queryKey: ["test"] 
  })

  function refetchQueryTest () {
     queryClient.refetchQueries({
      queryKey: ["test"]
     })
  }
  useEffectSkipMount(()=>{
     console.log("useEffectSkipMount running")
  },[count])
  return (
    <div className="bg-red-500 h-screen"> 
       <button onClick={()=>setCount(count + 1)} className="bg-green-400  p-5 rounded-md">click me {count}</button>
       <button onClick={()=>refetchQueryTest()}  className="bg-green-500  p-5 rounded-md">click me to trigger refetch {count}</button>
    </div>
  )
}

export default LandingPage