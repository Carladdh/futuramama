import express from "express";
import "dotenv/config";
import cors from "cors";
import { babyRouter } from "./v1/routes/babyRouter";
import { mommyRouter } from "./v1/routes/mommyRouter";
import { feedingRouter } from "./v1/routes/feedingRouter";
import { homeRouter } from "./v1/routes/homeRouter";
import { dbConnect } from "./config/mongo";
import { loginRouter } from "./v1/routes/loginRouter";
import { registerRouter } from "./v1/routes/registerRouter";
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
const PORT = process.env.PORT || 3000;

const API_NAME = "/api/v1";
app.use(`${API_NAME}/login`, loginRouter);
app.use(`${API_NAME}/register`, registerRouter);
app.use(`${API_NAME}/home`, homeRouter);
app.use(`${API_NAME}/babies`, babyRouter);
app.use(`${API_NAME}/mommy`, mommyRouter);
app.use(`${API_NAME}/feeding`, feedingRouter);

dbConnect().then(() => console.log("Conexion Ready"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
