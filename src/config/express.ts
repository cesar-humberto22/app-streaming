import express, {Application, json, Request, Response, urlencoded} from "express";
import {engine as exphbs} from "express-handlebars";
import {Server} from "http";
import path from "path";
import routesAPI from "../api/routes";

function initExpress() : Server {
    const app: Application = express();

    // Set Template engine to handlebars
    app.engine("hbs", exphbs());
    app.set("view engine", "hbs");
    app.use('/public', express.static(path.join(__dirname, '../public')))

    // Middleware
    app.use(json());
    app.use(urlencoded({extended: false}));

    // Check API Health / Ping
    app.get("/streaming/:id", (req : Request, res : Response) => {
        return res.render("home", req.params);
    });

    // Router V1
    app.use("/api", routesAPI);

    // Init Express
    const PORT: string | number = process.env.PORT || 8080;
    return app.listen(PORT, () => console.log(`Server started on port ${PORT}`) // tslint:disable-line
    );
}

export default initExpress;
