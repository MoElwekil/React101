import React from 'react'

class Image extends React.Component{
    render(){
        return (
            <div className="images-block">
                <ul>
                    {this.props.allImages.map(({urls, id, description}) => <li><img src={urls.regular} key={id} alt={description} /></li>)}
                </ul>
                
            </div>
        )
    }
}

export default Image