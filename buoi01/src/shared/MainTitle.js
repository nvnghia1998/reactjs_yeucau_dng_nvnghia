
import React, { Component } from 'react';
import './main-title.css';
import cls from 'classnames'
import ViewMore from './ViewMore';
import Button from './Button';

function MainTitle({ children, btnLabel, btnProps }) {

    const classes = cls('main-title spacing', {
        'd-flex tcl-jc-between tcl-ais-center': btnLabel
      });
    
      return (
        <div className={classes}>
          <h2>{children}</h2>
          {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
        </div>
      );
}

export default MainTitle;
<>
</>