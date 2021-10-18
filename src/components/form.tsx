import { stat } from "fs"
import React, {useState } from "react"
import  { Person }  from "./classes"
import {IPerson} from "./myInterface"
const MyForm = () =>{
    const [state,setState] = useState(
        {
            firstName : "",
            lastName : "",
            otherName : "",
            gender : "",
            age : parseInt(""),
            institution : "",
            faculty : "",
            major : "",
            cgpa : parseInt(""),
            year : parseInt("")
        }
        )

    const [student, setStudent] = useState<IPerson[]>([{
        ...state
    }])


    const handleChange = (event : React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) :void =>{
        setState({
            ...state,[event.target.name] : event.target.value
        })
    }


    const handleClick = ():void => {
        if(state.firstName && state.lastName && state.age){
            setStudent([...student,state]) 
        }
         
    }


    const person = student.map((person) =>{
        const currentStudent : Person = new Person(person)
        if(
            state.firstName && state.lastName && state.major && state.age &&
            state.cgpa && state.faculty && state.institution &&
            state.year
            ){
        return (
            <>
                <ul>{currentStudent.data.firstName}</ul>
                <li>{currentStudent.printPerson()}</li>
                <li>{currentStudent.printStudentStanding()}</li>
            </>
            
            )}
    })

    return(
        <>
            <div>
                <input type="text" className = "Input" placeholder = "First Name" name = "firstName" value={state.firstName} onChange = {handleChange} />
            </div>

            <div>
                <input type="text" className = "Input" placeholder = "Last Name" name = "lastName" value={state.lastName} onChange = {handleChange}/>
            </div>
            <div>
                <input type="text" className = "Input" placeholder = "Other Names" name = "otherName" value={state.otherName} onChange = {handleChange}/>
            </div>
            <div>
                <input type="number" className = "Input" placeholder = "Age" name = "age" value={state.age} onChange = {handleChange}/>
            
            </div>

            <div>
                <select className = "Input" name = "gender" value = {state.gender} onChange = {handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>            
            </div>

            <div>
                <input type="text" className = "Input" placeholder = "Institution" name = "institution" value={state.institution} onChange = {handleChange}/>
            </div>

            <div>
                <input type="text" className = "Input" placeholder = "Faculty" name = "faculty" value={state.faculty} onChange = {handleChange}/>
            </div>

            <div>
                <input type="text" className = "Input" placeholder = "Major" name = "major" value={state.major} onChange = {handleChange}/>
            </div>

            <div>
                <input type="number" className = "Input" placeholder = "CGPA" name = "cgpa" value={state.cgpa} onChange = {handleChange}/>
            </div>

            <div>
                <input type="number" className = "Input" placeholder = "Year" name = "year" value={state.year} onChange = {handleChange}/>
            </div>
            <button onClick = {handleClick}>
                Submit
            </button>

            <div>
                <h1>Students</h1>
                <h4  className = "Profile">{person}</h4>                    
            </div>
        </>
    
    )
}  

export default MyForm