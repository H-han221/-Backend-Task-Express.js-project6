const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount routes under /api
app.use("/", mainRoutes);

// Handle unknown routes (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
