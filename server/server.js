import express from "express"
import cors from "cors"
import blogdatas from "./api/blogdatas.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogdatas", blogdatas);
app.use("*", (req, res) => {res.status(404).json({ error:"seems like there's nothing here"})})

export default app;