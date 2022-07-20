import React, { Component } from 'react';
import ArticleLatest from '../components/ArticleLatest';
import Footer from '../components/Footer';
import Header from '../components/Header';
import blodDetail from '../images/blog-1.jpg';
import authorImg from '../images/john-doe.png'
import ArticlePopular from '../components/ArticlePopular';
import ArticleList from '../components/ArticleList';

function HomePage() {
    const article = {
        text: "Only Someone Who's Seen The Mummy Will Pass This!",
        bground: blodDetail,
        content:'Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…',
        author: {
            name: 'John Doe',
            avatarUrl: authorImg,
            date: 'June 02, 2020',
            hour: '1 min'
        }
        
    };
    return (
        <>
        <Header/>
        <ArticleLatest {...article} mainTitle="Latest Articles" typeArticle="1"/>
        <ArticlePopular {...article} mainTitle="Popular Articles" typeArticle="2"/>
        <ArticleList {...article} mainTitle="News List" typeArticle="3"/>
        <Footer/>
        </>
    );
}

export default HomePage;