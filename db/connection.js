const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(
            "mongodb+srv://harsh:harsh@nodewithflutter.b4grh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`Database connected : ${con.connection.host}`);
    } catch (error) {
        console.error(`Error could not connect to database: ${error.message}`);
        process.exit(1);
    }
};
module.exports.establishConnection = function () {
    return connectDB();
};
