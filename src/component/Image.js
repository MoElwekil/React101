import React from 'react'
import ImageCard from './ImageCard';

class Image extends React.Component{

    render(){
        return (
            <div className="images-block">
                <ul>
                    {this.props.allImages.map((image) => <li key={image.id}><ImageCard image={image} /></li>)}
                </ul>
                
            </div>
        )
    }
}

export default Image