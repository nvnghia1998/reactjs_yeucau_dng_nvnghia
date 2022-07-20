import React, { Component } from 'react';
import ArticleChild from './ArticleChild';
import MainTitle from '../../shared/MainTitle';
import './latest-news-list.css';


function ArticleLatest(props) {
    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle mainTitle={props.mainTitle} typeArticle={props.typeArticle}/>
                <div className='latest-news__list spacing'>
                    <ArticleChild
                        text={props.text}
                        bground={props.bground}
                        author={props.author}
                    />
                    <ArticleChild
                        text={props.text}
                        bground={props.bground}
                        author={props.author}
                    />
                    <ArticleChild
                       text={props.text}
                       bground={props.bground}
                       author={props.author}
                    />
                </div>
            </div>
        </div>
    );
}

export default ArticleLatest;

