const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.set('strictQuery', false); // Set strictQuery option

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/login", connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit the process with an error code
    }
};
