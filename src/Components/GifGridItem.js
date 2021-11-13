import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ id, title, img }) => {

    // console.log( img );
    return (
        <div className="card animate__bounceIn">
            <img src={ img } alt={ title }/>
            <p> { title } </p>
        </div>
    )
}

GifGridItem.propTypes = {

}
