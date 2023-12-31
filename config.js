const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  apiKey: "t9ngmlO7n7bo0OXON1SXVd1R4",
  apiSecret: "cLvBofhWTPcxE9xH57jqaNR0GfOEw2TFvY0M7L12K970wlxWyB",
  accessToken: "863026556146515969-IgRxE092yNzBf2y2R4GpHOovKQ1k3M4",
  accessSecret: "Vi9dh5iTolrjGgqurK56IYqVCYStGikU6KUzdqUZZdV28",
});

const rwClient = client.readWrite;

module.exports = rwClient;
