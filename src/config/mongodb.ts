import mongoose from "mongoose";

function initMongoDB(callback: () => void) {
    const MONGO_USER = process.env.MONGO_USER;
    const MONGO_PASS = process.env.MONGO_PASS;

    mongoose
        .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.e8oeovy.mongodb.net`, {})
        .then(() => {
            console.log("Success connect to MongoDB"); // tslint:disable-line
            callback();
        })
        .catch((err) => {
            console.log(`Failed connect to MongoDB cause => ${err}`); // tslint:disable-line
            process.exit(0);
        });
}

export default initMongoDB;
