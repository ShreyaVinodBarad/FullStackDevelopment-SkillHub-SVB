/*
👇Calling one by one: - 
console.log("Hello, App is Running!")
import {arr,obj,Display} from "./ExportingFile.js"
console.log(arr)
console.log(obj)
Display()
*/
// 👇 Call export statements at the Same time
import * as Import from "./ExportingFile.js"
console.log(Import.arr)
console.log(Import.obj)
Import.default()


