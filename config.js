// module.exports = {
//   consumer_key: "Y2QkDDU3hgg9ftX8Od6qTrWUB",
//   consumer_secret: "KZ5kZ6Wzwpx8uWemPomHZa9ZAjhNZatvkKnCNQI5PJkIvqmXiz",
//   access_token: "863026556146515969-arwlBb04NNCUqlpXkJ1xB9jb4ORJb3s",
//   access_token_secret: "Z0n4zFhYlDSAL8dBgtM1cVfv54kTzDFzEaNR7TnP0zOwE",
// };

// api key: Y2QkDDU3hgg9ftX8Od6qTrWUB
// api secret key: KZ5kZ6Wzwpx8uWemPomHZa9ZAjhNZatvkKnCNQI5PJkIvqmXiz
// barear token: AAAAAAAAAAAAAAAAAAAAAMX8rQEAAAAA%2BiKNYh%2FMiQDSva1izP7kpii7ZwQ%3DEc7nX0xjSFrdBP5eDFygFZ1oQ0zogsCO5BJSASMebdf4LymsIa
// acces token: 863026556146515969-arwlBb04NNCUqlpXkJ1xB9jb4ORJb3s
// acces secret token: Z0n4zFhYlDSAL8dBgtM1cVfv54kTzDFzEaNR7TnP0zOwE

const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  apiKey: "Y2QkDDU3hgg9ftX8Od6qTrWUB",
  apiSecret: "KZ5kZ6Wzwpx8uWemPomHZa9ZAjhNZatvkKnCNQI5PJkIvqmXiz",
  accessToken: "863026556146515969-arwlBb04NNCUqlpXkJ1xB9jb4ORJb3s",
  accessSecret: "Z0n4zFhYlDSAL8dBgtM1cVfv54kTzDFzEaNR7TnP0zOwE",
});

const rwClient = client.readWrite;

module.exports = rwClient;
