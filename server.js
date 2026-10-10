import express from "express";
const app = express();
const port = 3000;

// Root GET route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Camper Bot's homepage!");
});

// Hobbies GET route
app.get("/hobbies", (req, res) => {
  res.status(200).send("I cycle, go boating, and play guitar.");
});

// Skills GET route
app.get("/skills", (req, res) => {
  res.status(200).send("JavaScript, Node.js, and Express.js!");
});

// API Profile GET JSON route
app.get("/api/profile", (req, res) => {
  res.status(200).json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
