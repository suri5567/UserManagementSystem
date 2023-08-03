const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config( { path : 'config.env'} )
const { MONGO_URI } = process.env;

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
