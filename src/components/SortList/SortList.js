import React from 'react';

import './SortList.scss';

const SortList = props => {

    const items = props.sortListItems.map((sort) => {
            if(sort.clicked) return <button key={sort.id} onClick={() => props.onClickChangeColor(sort.id)} className="active-sort">{sort.type}</button>
            return <button key={sort.id} onClick={() => props.onClickChangeColor(sort.id)}>{sort.type}</button>
    })

    return(
        <div className="SortList">
            <h2>Sortuj:</h2>
            {items}
        </div>
        
    );
  }

export default SortList;