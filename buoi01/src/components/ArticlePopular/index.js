import MainTitle from "../../shared/MainTitle";
import ArticleItem from "../ArticleItem";
import './popular-news-list.css';
function ArticlePopular({articleProps, mainTitle, style,...restParams}) {
    
    return (
        <>
            <div className="popular-news section bg-white-blue">
                <div className="tcl-container">
                    <MainTitle {...mainTitle}/>
                    <div className="popular-news__list spacing">
                        <div className="popular-news__list--left">
                            <div className="popular-news__list--row">
                                <div className="popular-news__list--card">
                                    <ArticleItem {...articleProps} {...restParams}/>
                                </div>
                                <div className="popular-news__list--card">
                                    <ArticleItem {...articleProps} {...restParams}/>
                                </div>
                            </div>
                        </div>
                        <div className="popular-news__list--right">
                            <div className="popular-news__list--row">
                                <div className="popular-news__list--card">
                                    <ArticleItem {...articleProps} style={style} {...restParams} position='right'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ArticlePopular;