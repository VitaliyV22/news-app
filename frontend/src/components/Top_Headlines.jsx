import React, { useState, useEffect } from "react";
import axios from "axios";

const handleNews = async (setNews) => {
  try {
    const res = await axios({
      url: "http://localhost:8080/api/newsletter",
      method: "GET",
    });
    // console.log(res.data);
    setNews(res.data.articles); // Update the state with the fetched data
  } catch (err) {
    console.error("Error fetching news:", err);
  }
};

export const Top_Headlines = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    handleNews(setNews);
  }, []);

  const formatDate = (dateString) => {
    return dateString.replace(/Z/, "");
  };

  return (
    <div>
      <h1 className="text-4xl px-5 py-4 font-bold ">The Latest</h1>
      <div className="divider divider-info px-5"></div>
      {news.length > 0 ? (
        <ul className="flex flex-col gap-2 px-20">
          {news.map((item, index) => (
            <li
              className=" lg:flex items-start  w-full p-5 gap-5 bg-base-300 rounded-lg shadow-xl"
              key={index}
            >
              <div className="avatar">
                <div className="w-72 rounded-lg">
                  <img src={item.urlToImage} />
                </div>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold mb-5">{item.title}</h2>

                <p>{item.description}</p>
                <div className="mt-32 text-sm">
                  <p className="font-bold">{item.author}</p>
                  <p className="">{formatDate(item.publishedAt)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
