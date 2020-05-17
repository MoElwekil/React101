import React from 'react';
import './App.css';
import Unsplash from './API/Unsplash'
import SearchBar from './component/SearchBar';
import Image from './component/Image';

class App extends React.Component{

  state = {images: []}

  onSubmitForm = async (term) => {
    const ApiResult = await Unsplash.get('search/photos', {
      params: {
        query: term
      },

      
    })

    this.setState({images: ApiResult.data.results})
  }

  render(){
    return (
      <div className="App">
        <SearchBar onUserFormSubmit={this.onSubmitForm} />
        <Image allImages={this.state.images} />
      </div>
    );
  }
}

export default App;
