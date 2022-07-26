import React, { Component } from 'react';
import MainTitle from '../../shared/MainTitle';
import ArticleItem from '../ArticleItem';

import './latest-news-list.css';


function ArticleLatest({ articleProps, mainTitle, ...restPrams}) {
    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle {...mainTitle} />
                <div className='latest-news__list spacing'>
                    <div className="latest-news__card">
                        <ArticleItem {...articleProps} {...restPrams} />
                    </div>
                    <div className="latest-news__card">
                        <ArticleItem {...articleProps} {...restPrams}/>
                    </div>

                    <div className="latest-news__card">
                        <ArticleItem {...articleProps} {...restPrams}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleLatest;

