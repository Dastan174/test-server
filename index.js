import http from "http";

const app = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end("Hello fs-15");
  }
});
const port = 5000;

app.listen(port, () => {
  console.log("Server is on port " + port);
});
