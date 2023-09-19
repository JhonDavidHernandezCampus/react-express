import Express  from "express";
import routerUser from "./controllers/user.js";
import cors from "cors";

const app = Express();
app.use(cors());

app.use(routerUser);

const config={
    localhost:"localhost",
    port:5200
}

app.listen(config,()=>{
    console.log(`http://${config.localhost}:${config.port}`);
})