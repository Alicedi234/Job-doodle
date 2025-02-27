import express from "express";
import fs from "fs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

//app get
app.get("/welcome", (req, res) => {
  res.send("Hello World");
});

//get method to get all the job data with all fields from data.json
app.get("/", (_req, res) => {
  const jobsFile = fs.readFileSync("./data/jobs.json");
  const jobsData = JSON.parse(jobsFile);
  res.send(jobsData);

  //to filter the data to show we can use map function on jobsData
});

//get method to get job based on Category
app.get("/:categoryId", (req, res) => {
  const jobsFile = fs.readFileSync("./data/jobs.json");
  const jobsData = JSON.parse(jobsFile);
  const categoryId = parseInt(req.params.categoryId, 10);
  console.log(req.params);
  const filteredJobs = jobsData.filter((job) => job.category_id === categoryId);
  res.send(filteredJobs);
});

//listen to server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
