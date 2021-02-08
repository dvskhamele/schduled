import React from 'react';

const ItemList=(props)=>{

    return(
        <div >
            <p>
            <h3>{props.item}</h3>
            <button 
            type="submit" 
            onClick={()=>props.del(props.index)}> Remove </button>
            </p>
        </div>
    );
}

export default ItemList;