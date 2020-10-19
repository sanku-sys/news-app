import React, { Fragment } from "react"
import enhancer from "./enhancer"

function News(props) {
    const {
        newsData
    } = props

    return (
        <Fragment>
            <div style={{ padding: '2% 10%' }}>
                <div className="container-fluid">
                   <legend>Latest News</legend>
                   {newsData && newsData.length === 0 && <div>Fetching data.......</div>}
                    {newsData && newsData.map((news,i) => (
                        <div className="row mt-2" key={i}>
                            <div className="col-2">
                                <img src={news.urlToImage} alt="news" height="100" width="100" />
                            </div>
                            <div className="col-10">
                                {news.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
export default enhancer(News)
