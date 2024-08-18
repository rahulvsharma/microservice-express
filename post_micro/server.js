import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.get("/", (req, res) => {
  return res.json({ message: "its working post micro" });
});

app.listen(PORT, () => console.log("server is running"));
