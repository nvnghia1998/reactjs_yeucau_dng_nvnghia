import React, { Component } from 'react';
import './article-item.css';
import ArticleThumbnail from './ArticleThumbnail';
import ArticleContent from './ArticleContent';
import cls from 'classnames';

function ArticleItem({ author, description, thumbnail, title, style, className, ...restPrams}) {

    let classes = cls('article-item',{
        'style-row': style === 'row'
    },className);
    return (
        <>
            <article className={classes}>
                <ArticleThumbnail thumbnail={thumbnail} />
                <ArticleContent title={title} description={description} author={author} {...restPrams}/>
            </article>
        </>
    );
}

export default ArticleItem;