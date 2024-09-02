import express from "express";
import "dotenv/config";
import cors from "cors";
import { babyRouter } from "./v1/routes/baby.router";
import { mommyRouter } from "./v1/routes/mommy.router";
import { feedingRouter } from "./v1/routes/feeding.router";
import { homeRouter } from "./v1/routes/home.router";
import { dbConnect } from "./config/mongo";
import { loginRouter } from "./v1/routes/login.router";
import { registerRouter } from "./v1/routes/register.router";
import { diaryRouter } from "./v1/routes/diary.router";
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
app.use(`${API_NAME}/diary`, diaryRouter);

dbConnect().then(() => console.log("Conexion Ready"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
