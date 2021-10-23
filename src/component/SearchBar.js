import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: '' }
    onInputChange = (event) => {
        this.setState({ term : event.target.value })
        //You Can ==> change search bar 
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        ///// call callback function parent Component

    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormsubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="">Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;