import express from "express";
import cors from "cors";
import grammarRoutes from "./routes/index";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/grammars", grammarRoutes);

app.listen(port, () => {
  console.log(`後端啟動  http://localhost:${port}`);
});
