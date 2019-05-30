import React from 'react';


class SearchBar extends React.Component {
    state = { input: '' };
 

    onInputChange = (event) => {
        // take our value out of the event object, and assign it to our state property
        this.setState({input: event.target.value})
    };

    // must be an arrow function because this is a callback that we are passing to some child element
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.input);
    };

    render() {
        return (
            <div className="SearchBar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={this.state.input} 
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;