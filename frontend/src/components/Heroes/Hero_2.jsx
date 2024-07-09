import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoNews = async (setNews) => {
  try {
    const res = await axios({
      url: "http://localhost:8080/api/cryptonews",
      method: "GET",
    });
    console.log(res.data);
    setNews(res.data); // Update the state with the fetched data
  } catch (err) {
    console.error("Error fetching news:", err);
  }
};

export const Hero_2 = () => {
  return (
    <>

    
    </>
  )
}
