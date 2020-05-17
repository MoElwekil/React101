import React from 'react'

class SearchBar extends React.Component {
    state = {searchWord: ''}

    // call back function
    onUserFormSubmit = (e) => {
        e.preventDefault();

        this.props.onUserFormSubmit(this.state.searchWord)
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.onUserFormSubmit}>
                    <input type="text" placeholder="Search photos" value={this.state.searchWord} onChange={(e) => this.setState({searchWord: e.target.value})} />
                </form>
            </div>
        )
    }
}

export default SearchBar