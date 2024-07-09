import React, { useState, useEffect } from "react";
import axios from "axios";

const TopTech = async (setNews) => {
  try {
    const res = await axios({
      url: "http://localhost:8080/api/toptech",
      method: "GET",
    });
    // console.log(res.data);
    setNews(res.data.articles); // Update the state with the fetched data
  } catch (err) {
    console.error("Error fetching news:", err);
  }
};

export const Hero = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    TopTech(setNews);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const firstArticle = news.length > 0 ? news[1] : null;
  return (
    <>
     
        {firstArticle ? (
          <div className="px-5 py-4 flex flex-col gap-2">
            <p>Tech</p>
            <h2 className="text-4xl hover:text-white font-bold">
              {firstArticle.title}
            </h2>

            <p>{firstArticle.description}</p>

            <p className="">{formatDate(firstArticle.publishedAt)}</p>
            <p className="font-bold">{firstArticle.author}</p>
            <div className="avatar">
              <img
                className="w-40"
                src={firstArticle.urlToImage}
                alt="heroImage"
              />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      
      
      
    </>
  );
};
