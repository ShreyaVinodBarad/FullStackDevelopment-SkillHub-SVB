export const arr = [1, 2, 3]
export const obj = {Name: "Shreya"}
export const Display = () =>{
    console.log("Working on Import and Export!")
}
/* 
- 👆 The above three lines of code are known 
as Named export.
- They can be more than 1.
*/
const defaultExport = () =>
{
    console.log("Default Export!")
}
export default defaultExport
/*
👆
- This is known as Default Export. 
- One Default Export per file.
*/ 
