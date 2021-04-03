const env = require('dotenv');
const mongoose = require('mongoose');
/**
 * Connect MongoDB
 */
env.config();

async function connectDB() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }).then(() => console.log('Database connected'));

    } catch (e) {
        console.error(e);
    }
};

module.exports = connectDB;