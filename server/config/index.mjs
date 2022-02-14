import express from "express";

import "dotenv/config";

const app = express();

const MainApp = () => {
  app.get("/home", (req, res) => {
    res.send("This is home component");
  });
  app.listen(process.env.PORT, () => {
    console.log("server started successfully");
  });
};

export default MainApp;
