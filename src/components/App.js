import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
 
class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null
    };

    // makes a default search anytime the App is first rendered
    componentDidMount(){
        this.onInputSubmit('buildings');
    }

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
        this.setState({ 
                videos: response.data.items,
                selectedVideo: response.data.items[0]
        });
        // console.log(response.data.items);
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;



// must use promises or async await syntax anytime you make an asynchronous call (onInputSubmit)

