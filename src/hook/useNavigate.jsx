import { useNavigate } from "react-router-dom"

export const useNav =(init)=>{
 const navigate = useNavigate()
 console.log(navigate)
 
 const goBackHandler = (event)=>{
event.preventDefault()
navigate(init || "/product")
 }
 return {
  goBackHandler,
 }
}