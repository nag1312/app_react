'use client';

import React, {Component} from 'react'
import axios from '../../axios'


var token = 'c06e1a9e4fdc04e962527e901a50dd20eed895094b88d56cd20399d33a3eac5143a4cde97a7e0c6ffd213f1316fe9bdb0a67a905f2a0451bf0dccb5af0592d3c746f27aae1ab730c145eb2a5375d7e8cfbd3c8c2d856120fd7a9b0794f06870f60d8e510cea4e2b15aaa286c5d022e61028924becf4fd377b26d4aeea18cd97e';


export default class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/users`, {
                headers: {
                    'Authorization' : 'Bearer ' + token
                  }
            })
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    <div>
                    <p>{u.id}</p>
                    <p>{u.username}</p>
                    <p>{u.email}</p>
                    </div>
                    )
                    this.setState({users})

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
            {this.state.users}
            </div>
        )
    }
}