const axios = require("axios");

exports.getNewsletterData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error calling newsletter API:", error);
    res.status(500).send("Error calling newsletter API");
  }
};

exports.getTopHeadlineTech = async (req, res) => {
  try {
    const date = Date;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=technology&from=${date}&sortBy=relevancy&pageSize=12`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error calling newsletter API:", error);
    res.status(500).send("Error calling tech API");
  }
};

exports.getCryptoNews = async (req, res) => {
  try {
    const date = Date;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=cryptocurrency&from=${date}&sortBy=relevancy&pageSize=12`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error calling newsletter API:", error);
    res.status(500).send("Error calling tech API");
  }
};

exports.getAiNews = async (req, res) => {
  try {
    const date = Date;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=artificialintelligence&from=${date}&sortBy=relevancy&pageSize=12`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error calling newsletter API:", error);
    res.status(500).send("Error calling tech API");
  }
};
