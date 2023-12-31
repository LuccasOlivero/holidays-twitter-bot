const rwClient = require("./config");

const tweet = async () => {
  try {
    await rwClient.v1.tweet(status: "nice");
  } catch (e) {
    console.error(e);
  }
};

tweet();
