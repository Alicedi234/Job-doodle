import express from "express";
import fs from "fs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

//midlleware to parse the request body
app.use(express.json());
app.use(express.static("public/photos"));

//get method to check if server is running
app.get("/welcome", (req, res) => {
  res.send("Hello World");
});

//get method to get all the job data with all fields from data.json
app.get("/", (_req, res) => {
  const jobsFile = fs.readFileSync("./data/jobs.json");
  const jobsData = JSON.parse(jobsFile);
  const jobsForHomePage = jobsData.map((job) => {
    return {
      title: job.category,
      company: job.company,
      location: job.location,
    };
  });
  res.send(jobsForHomePage);

  //to filter the data to show we can use map function on jobsData
});

//get method to get job based on Category
app.get("/:categoryId", (req, res) => {
  const jobsFile = fs.readFileSync("./data/jobs.json");
  const jobsData = JSON.parse(jobsFile);
  const categoryId = parseInt(req.params.categoryId, 10);
  console.log(req.params);
  const filteredJobs = jobsData.filter((job) => job.category_id === categoryId);
  const jobsForCategory = filteredJobs.map((job) => {
    return {
      title: job.category,
      company: job.company,
      location: job.location,
    };
  });
  res.send(jobsForCategory);
});

//app method to get job based on job id
app.get("/job/:jobId", (req, res) => {
  const jobsFile = fs.readFileSync("./data/jobs.json");
  const jobsData = JSON.parse(jobsFile);
  const jobId = parseInt(req.params.jobId, 10);
  const job = jobsData.find((job) => job.id === jobId);
  res.send(job);
});

//listen to server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
