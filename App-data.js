import React from 'react';
class App extends React.Component {
    constructor(){
        super();
        this.state = {data: [
            {id: 1, name: "Somi Jeon"},{id: 2, name:"Kim Doyeon "},
            {id: 3, name: "Kang Mina"},{id: 4, name:"Choi Yujeong"},
            {id: 5, name: "Yu Yeonjung"},{id: 6, name:"Kim SoHye"},
            {id: 7, name: "Ju Kyeolkyung"}, {id: 8, name:"Cheong Chaeyeon"},
            {id: 9, name: "Kim Sejung"},{id: 10, name:"Kim Chungha"},
            {id: 11, name: "Lim NaYoung"}
        ]}
    }
    render(){
        let rows = this.state.data.map( person => {
            return <PersonRow key={person.id} data={person}/>
        });
        return <table>
            <tbody>{rows}</tbody>
        </table>
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
}

export default App
