import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
// import { GifGridItem } from './Components/GifGridItem';


const GifExpertApp = ( props ) => {


    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['game of thrones']);


    // const handleAdd = () => {
    //     setCategories((categories) => {
    //         return [...categories, 'James Rodriguez'];
    //     })
    // }

    // console.log(categories);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    ))
                }
            </ol>

        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

