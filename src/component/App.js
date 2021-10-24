import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';


class App extends React.Component {

    state = { videos: [], selectVideo: null }

    componentDidMound(){
        this.onTermSubmit('dortmound')
    }
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ 
            videos: response.data.items,
            selectVideo:response.data.item[0]
         })

    };
    onVideoSelect = video => {
        this.setState({ selectVideo: video })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid"><div className="ui row"><div className="eleven wide column">
                    <VideoDetail videos={this.state.selectVideo} />

                </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect}
                         videos={this.state.videos} />

                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default App;