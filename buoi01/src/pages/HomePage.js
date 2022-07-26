import React, { Component } from 'react';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import ArticleList from '../components/ArticleList';

function HomePage() {
    const articleProps = {
        title: "Only Someone Who's Seen The Mummy Will Pass This!",
        thumbnail: "/images/blog-1.jpg",
        description:'Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…',
        author: {
            name: 'John Doe',
            avatarUrl: "/images/john-doe.png",
            date: 'June 02, 2020',
            hour: '1 min'
        }
        
    };
    return (
        <>
        <ArticleLatest articleProps = {articleProps} mainTitle={{children:'Latest Articles'}} desc={false} cate={false} hasImgAu={true}/>
        <ArticlePopular articleProps = {articleProps}  mainTitle={{children:'Popular Articles' , btnLabel:'View more', btnProps:{type: 'default',
      as: 'a'}}} className="style-card" style="row" desc={true} cate={true}  hasImgAu={true}/>
        <ArticleList articleProps = {articleProps} mainTitle={{children:'News List' , btnLabel:'View more', btnProps:{type: 'default',
      as: 'a'}}} className="style-card" desc={false} cate={false}  hasImgAu={false}/>
        </>
    );
}

export default HomePage;