import React, { Component } from 'react';
import IconLoading from '../../shared/IconLoading';
import MainTitle from '../../shared/MainTitle';
import ArticleItem from '../ArticleItem';
function ArticleList(props) {
    return (
        <>
            <div className="articles-list section">
                <div className="tcl-container">
                    <MainTitle mainTitle={props.mainTitle}/>
                    <div className="tcl-row">
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...props}/>
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...props}/>
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...props} />
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...props}/>
                        </div>
                    </div>
                    <IconLoading/>
                </div>
            </div>
            <div className="spacing"></div>
        </>
    );
}

export default ArticleList;