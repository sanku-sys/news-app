import React, { useState, useEffect } from "react";
import axios from 'axios';

export let enhancer =
  (NewsComponent) => ({ history, ...props }) => {
    let [newsData, setNewsData] = useState([])

    useEffect(() => {
      let currentDate = new Date().toISOString().slice(0, 10).split('-');
      let formattedDate = `${currentDate[0]}/${currentDate[1]}/${currentDate[2]}`
      axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=${formattedDate}&sortBy=publishedAt&apiKey=b13d0afb31724d0183b396f570fb6f03`).then(response => {
        if (response && response.data && response.data.articles && response.data.articles.length > 0) {
          setNewsData(response.data.articles)
        }
      })
      .catch(err => {
          console.log(err);
      })
    }, [])

    return (
      <NewsComponent
        {...props}
        {...{
            newsData
        }}
      />
    );
  }


export default enhancer;

