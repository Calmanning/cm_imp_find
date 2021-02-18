import React, { Component } from "react";
import API from "../../utils/api";
import TableInfo from "../TableInfo"
import "./TableHead.css"


export default class TableHead extends Component {

    constructor() {
        super();
        this.state = {
            randomUsers: [{}],
            filteredUsers: [{}],
            impNames: [{}],
            sortedUsers: "descending",


            sortRandos: () => {
                const list = this.state.filteredUsers
                if (this.state.sortedUsers === "descending") {
                    console.log("down")
                    list.sort((a, b) => {
                        if (a.dob.age > b.dob.age) {
                            return -1
                        } else if (a.dob.age < b.dob.age) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    this.setState({
                        filteredUsers: list
                    })
                    this.setState({
                        sortedUsers: "ascending",
                    })
                } else {
                    console.log("up")
                    list.sort((a, b) => {
                        if (a.dob.age < b.dob.age) {
                            return -1
                        } else if (a.dob.age > b.dob.age) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    this.setState({
                        filteredUsers: list
                    })
                    this.setState({
                        sortedUsers: "descending",
                    })
                }
            },

            sortNames: () => {
                const nameList = this.state.filteredUsers
                if (this.state.sortedUsers === "descending") {
                    console.log("trying")
                    console.log(this.state.filteredUsers)
                    nameList.sort((a, b) => {
                        if (a.name.first > b.name.first) {
                            return -1
                        } else if (a.name.first < b.name.first) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    this.setState({
                        impNames: nameList
                    })
                    this.setState({
                        sortedUsers: "ascending",
                    })
                } else {
                    console.log("hey there")
                    nameList.sort((a, b) => {
                        if (a.name.first < b.name.first) {
                            return -1
                        } else if (a.name.first > b.name.first) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    this.setState({
                        impNames: nameList
                    })
                    this.setState({
                        sortedUsers: "descending",
                    })
                }
            },
            
            handleSearchInput: event => {
                console.log(event.target.value);
                const filterText = event.target.value
                const filteredResult = this.state.randomUsers.filter(input => {
                    let people = Object.values(input).join("").toLowerCase()
                    return people.indexOf(filterText.toLowerCase()) !== -1;
                });

                this.setState({
                    filteredUsers: filteredResult
                })

            }

        };
    }

    componentDidMount() {
        API.getRandos().then(results => {
            console.log(results)
            this.setState({
                randomUsers: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        Search:
                    <input type="search" placeholder="enter a name or email" onChange={e => this.state.handleSearchInput(e)}>
                        </input>
                        </div>
                        </div>
               
                <div className="row title-row">
                
                    <div className="col-sm-3 titles "> <a className="dropdown-item titles click" onClick={this.state.sortNames}>Name</a></div>
                    <div className="col-sm-3 titles"> email</div>
                    <div className="col-sm-3 titles "> <a className="dropdown-item titles click" onClick={this.state.sortRandos}>Age</a></div>
                     
                </div>
                

                <TableInfo
                    randos={this.state.filteredUsers}
                />
            </div>
        );
    };
}

