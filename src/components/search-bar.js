import React from 'react';

export default class SearchBar extends React.Component {

    state = { term: '' };

    // when we put in a search - search for new videos

    render() {
        return (
            <div className='col-md-10 search-bar'>
                <input 
                    placeholder='search for a video'
                    value={this.state.term} 
                    onChange={event => this.searchYT(event.target.value)}
                />
            </div>
        )
    }

    searchYT = (term) => {
        this.setState({term});
        this.props.search(term);
    }


}