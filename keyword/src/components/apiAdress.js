import React, { Component } from 'react';
import dataList from './data.json';

class Data extends Component {
    constructor() {
        super();
        this.state = {
            dataList: []
        };
    }

    componentWillMount() {
        axios.get('../public/users.json') // JSON File Path
            .then(response => {
                this.setState({
                    dataList: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const dataList = this.state.dataList;
        let dataBlock = '';

        if (dataList.length > 0) {
            dataBlock = dataList.map(obj => {
                return (
                    <Usercard key={obj.id} id={obj.id} imgPath={obj.avatar_url} name={obj.name}/>
                )
            })
        }

        return (
            <div className="row container">
                {usersListBlock}
            </div>
        )
    }
}

export default Data;