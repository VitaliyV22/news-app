const axios = require('axios');

exports.getNewsletterData = async (req, res) => {
  try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch', {
          headers: {
              'Authorization': `Bearer ${process.env.NEWSLETTER_API_KEY}`
          }
      });
      res.json(response.data);
  } catch (error) {
      console.error('Error calling newsletter API:', error);
      res.status(500).send('Error calling newsletter API');
  }
};