import React, { Component } from "react";

import classes from "./SearchBar.module.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
    }

    handleSearchTermChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className={[classes.SearchBar, "ui", "segment"].join(" ")}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.searchTerm}
                            onChange={this.handleSearchTermChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
