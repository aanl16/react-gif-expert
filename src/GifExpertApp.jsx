import React from 'react';
import { useState } from "react";
import { AddCategory, GifGrid } from './Components';

const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
            
        // console.log(newCategory)
        // setCategories( cat => [...cat, 'Demon Slayer' ])
        setCategories([newCategory, ...categories])
    }

 return (
    <>

        <h1>GIF Expert App</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value) } />
        
        { 
            categories.map( category => ( 
                <GifGrid 
                key={ category } 
                category={ category } /> 
            ))
        }
    </>
  )
}

export default GifExpertApp;
