import React, { Component } from 'react';
import Button from '../../shared/Button';
import IconLoading from '../../shared/IconLoading';
import MainTitle from '../../shared/MainTitle';
import ArticleItem from '../ArticleItem';
function ArticleList({articleProps,mainTitle, ...restPrams}) {
    return (
        <>
            <div className="articles-list section">
                <div className="tcl-container">
                    <MainTitle {...mainTitle} />
                    <div className="tcl-row">
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...articleProps} {...restPrams} />
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...articleProps} {...restPrams} />
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...articleProps} {...restPrams}/>
                        </div>
                        <div className="tcl-col-12 tcl-col-md-6">
                            <ArticleItem
                                {...articleProps} {...restPrams}/>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button className="btn btn-primary btn-size-large" loading={true}>Load more</Button>
                    </div>
                </div>
            </div>
            <div className="spacing"></div>
        </>
    );
}

export default ArticleList;