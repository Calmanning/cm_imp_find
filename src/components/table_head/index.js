import { render } from "@testing-library/react";
import React, {Component} from "react";
// import table
import API from "../../utils/api";

export default class TableHead extends Component {

    constructor() {
        super();
        this.state = {
            randomUsers: [{}],
            filteredUsers: [{}],
            sortedUsers: "descending",

            sortRandos: age => {
                if(this.state.order === "ascending") {
                    this.setState({
                        sortedUsers: "descending",
                    })
                }else {
                            this.setState({
                            sortedUsers: "ascending",
                        })
                }
            },

            handleSearchInput: event => {
                console.log(event.target.value);
                const filterText = event.target.value
                const filteredResult = this.state.randomUsers.filter(input => {
                    let people = Object.values(input).join("").toLowerCase()
                    return people.indexOf(filterText.toLowerCase()) !== -1;
                } );

                this.setState({
                    filteredUsers: filteredResult
                 })

            }

        } 

        // componentDidMount() { 
        //     API.getRandos().then(results => {
        //         this.setState({ 
        //             randomUsers: results.data.results,
        //             filteredUsers: results.data.results
        //         });
        //     });
        // }

        // render() {
        //     return (

        //     );
        // };
    }
}
