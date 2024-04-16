import express from "express";
import apiV1 from "./routes/route";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", apiV1);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is ready" });
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
