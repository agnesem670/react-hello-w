import React from 'react'
import Person from './Person'

function NameList(){
    const names = ['Clark', 'Bruce', 'Diana']
    const persons = [
        {
            id:1,
            name:'Bruce',
            age: 32,
            skill: 'React'
        },
        {
            id:2,
            name:'Diana',
            age: 22,
            skill: 'Python'
        },
        {
            id:3,
            name:'Dan',
            age: 41,
            skill: 'Java'
        }
    ]

    //const personList = persons.map(person => <Person key={person.id} person={person} />)
    //return <div>{personList}</div>
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

/* function NameList() {
    const names = ['Some', 'Other', 'Next']
    const namesList = names.map(name => <h2>{name}</h2>)

    return (<div>{namesList}</div>)

    <div> 
        {
            names.map(name => <h2>{name}</h2>)
        }
    </div>

    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
    </div>

} */

export default NameList