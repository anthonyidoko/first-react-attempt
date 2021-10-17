import React from "react";
export type S = string
// export default interface Istudent{
//     institution : S
//     faculty : S
//     major : S
//     cgpa : number
//     year : number
// }

export interface IPerson{
    firstName : S
    lastName : S
    otherName : S|undefined
    gender : S
    age : number
    institution : S
    faculty : S
    major : S
    cgpa : number
    year : number
}