import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import allRoutes from "./adapters/http/routes/allRoutes.routes";
import { AppDataSource } from "./adapters/dataSource/data-source";


dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use('/api', allRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("database started!!!!!!!!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  export  {app};