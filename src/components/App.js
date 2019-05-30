import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
 
class App extends React.Component {
    state = { videos: [] };

    //method called anytime the SearchBar form is submitted
    onInputSubmit = async (input) => {
        // calling a preconfigured instance of axios, passing in:
            // 1. the route that we want access to
            // 2. the q parameter (the query term to search for)
        // storing the result in the response object
        const response = await youtube.get('/search', {
            params: {
                q: input
            }
        });
        this.setState({ videos: response.data.items });
        console.log(response.data.items);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;



// must use promises or async await syntax anytime you make an asynchronous call (onInputSubmit)

