
import React, { Component } from 'react';
import './main-title.css';
import ViewMore from './ViewMore';
function MainTitle(props) {

    return (
        <>
            <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                <h2>{props.mainTitle}</h2>
                {props.typeArticle !== '1' ? <ViewMore/> : ''}
            </div>
        </>
    );
}

export default MainTitle;
<>
</>