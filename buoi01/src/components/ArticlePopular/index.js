import MainTitle from "../../shared/MainTitle";
import ArticleItem from "../ArticleItem";
import './popular-news-list.css';
function ArticlePopular(props) {
    return (
        <>
            <div className="popular-news section bg-white-blue">
                <div className="tcl-container">
                    <MainTitle mainTitle={props.mainTitle}/>
                    <div className="popular-news__list spacing">
                        <div className="popular-news__list--left">
                            <div className="popular-news__list--row">
                                <div className="popular-news__list--card">
                                    <ArticleItem {...props}/>
                                </div>
                                <div className="popular-news__list--card">
                                    <ArticleItem {...props}/>
                                </div>
                            </div>
                        </div>
                        <div className="popular-news__list--right">
                            <div className="popular-news__list--row">
                                <div className="popular-news__list--card">
                                    <ArticleItem {...props} position='right'/>
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