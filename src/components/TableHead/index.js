import React, { Component } from "react";
import API from "../../utils/api";
import TableInfo from "../TableInfo"


export default class TableHead extends Component {

    constructor() {
        super();
        this.state = {
            randomUsers: [{}],
            filteredUsers: [{}],
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

            sortAge: () => {
                const list = this.state.filteredUsers
                //console.log(list)
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
        console.log("it did!")
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
            <div>
                <tr>
                    <th>
                        Search:
                    <input type="search" placeholder="enter a name or email" onChange={e => this.state.handleSearchInput(e)}>
                        </input>
                    </th>
                </tr>
                <tr>

                    <th>
                        <td>Name</td>
                        <td>Email</td>
                        <td><a className="dropdown-item" onClick={this.state.sortRandos}>Age</a></td>

                    </th>

                </tr>

                <TableInfo
                    randos={this.state.filteredUsers}
                />
            </div>
        );
    };
}

