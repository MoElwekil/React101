import React from 'react'

class Image extends React.Component{
    render(){
        return (
            <div className="images-block">
                <ul>
                    {this.props.allImages.map(({urls, id, alt_description}) => <li key={id}><img src={urls.regular} alt={alt_description} /></li>)}
                </ul>
                
            </div>
        )
    }
}

export default Image