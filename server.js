import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ArthurDex backend running" });
});

// Wallet connect mock route
app.post("/api/wallet/connect", (req, res) => {
  res.json({ message: "Wallet connected successfully (mock response)" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ ArthurDex backend running on port ${PORT}`);
});
