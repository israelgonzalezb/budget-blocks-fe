import React,{useEffect,useState} from "react"
import Balance from "./Balance_Components/Balance"
//I: It looks like this component was deprecated and replaced with "./OnboardComponents/FirstOnboard"

const FirstOnboard = props => {
    
    return (
        <div className="">
        Manually set budgets
        <Balance /> 
        </div>
    )
}
export default FirstOnboard