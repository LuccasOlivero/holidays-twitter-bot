const Twitter = require("twitter-v2");
require("dotenv").config();

const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  // bearer_token: process.env.TWITTER_BEARER_TOKEN,
};

const client = new Twitter(config);

async function postTweet() {
  const tweetText =
    "Hello, Twitter! This is my first tweet using the Twitter API.";

  try {
    const { data } = await client.post("tweets", {
      status: tweetText,
    });

    console.log("Tweet posted successfully:", data);
  } catch (error) {
    console.error("Error posting tweet:", error);
  }
}

postTweet();
