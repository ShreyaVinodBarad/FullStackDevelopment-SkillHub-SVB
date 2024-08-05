import { isEmpty } from "./checkEmpty.js"
/* 
Read as:
import {something} from FileLocation
*/
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const age = document.getElementById("age")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    if(isEmpty(fname) && isEmpty(lname) && isEmpty(age))
    {
        console.log("All Fields are Required!")    
    }
    else if((!isEmpty(fname) && isEmpty(lname) && isEmpty(age)) || 
           (isEmpty(fname) && !isEmpty(lname) && isEmpty(age)) ||
           (isEmpty(fname) && isEmpty(lname) && !isEmpty(age)))
    {
        console.log("Two fields are remaining to Fill!")
    }
    else if((isEmpty(fname) && !isEmpty(lname)) && !isEmpty(age) ||
            (!isEmpty(fname) && !isEmpty(lname)) && isEmpty(age) ||
            (!isEmpty(fname) && isEmpty(lname)) && !isEmpty(age)
           )
    {
        console.log("One Field is Remaining to Fill!")
    }
    else if(!isEmpty(fname) && !isEmpty(lname) && !isEmpty(age))
    {
        console.log("Form Submitted!")
    }
    
})
/*
Syntax:-
addEventListner("Type of Click you want!" , CallBack Function)
{
}
*/ 
