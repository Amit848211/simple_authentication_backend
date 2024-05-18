const express = require("express");
const app = express();

function loggingMiddleware(req, res, next) {
  const start = Date.now();
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log("Amit-Kumar", `[${timestamp}] ${method} ${url}`);
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      "Amit-Kumar",
      `[${timestamp}] ${method} ${url} - ${duration}ms`
    );
  });

  next();
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
