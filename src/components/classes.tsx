import React from "react";
import { S, IPerson} from './myInterface'


export class Person{
    data : IPerson
    constructor(data : IPerson){
        this.data = data
    }

    printPerson() :string{
        return(`
        Full Name : ${this.data.firstName} ${this.data.lastName} ${this.data.otherName}
        Age :       ${this.data.age}
        Gender :    ${this.data.gender}
        School :    ${this.data.institution}
        Faculty :   ${this.data.faculty}
        Major :     ${this.data.major}
        CGPA :      ${this.data.cgpa}
        Year :      ${this.data.year}
        `); 
    }

    printStudentStanding() : string{
        return(`
        ${this.data.firstName} is currently on ${this.data.cgpa} Cummulative Grade Point Average.
        `)
    }

}