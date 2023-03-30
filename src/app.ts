import mongoose from "mongoose";
import initLoadEnv from "./config/env";
import initExpress from "./config/express";
import initMediaServer from "./config/media-server";
import initMongoDB from "./config/mongodb";
import payVideos from "./config/play-video";

// Load Env File
initLoadEnv();

initMongoDB(() => {
    const server = initExpress();

    // Handling terminate gracefully
    process.on("SIGTERM", () => {
        console.log("SIGTERM signal received."); // tslint:disable-line
        console.log("Closing Express Server"); // tslint:disable-line
        server.close(() => {
            console.log("Express server closed."); // tslint:disable-line
        });
        mongoose.connection.close(false);
    });
});

initMediaServer().run();

payVideos()