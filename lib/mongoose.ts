import mongoose from 'mongoose';

// wrapper function for apollo server AKA connection handler
// wraps API to make sure DB is connected before the server loads
const connectDb = (handler: (req: Request, res: Response) => void) => 
    async (req: Request, res: Response) => {
        if (mongoose.connections[0].readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        };
        return handler(req, res);
};

// verify connection
const db = mongoose.connection;
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

export default connectDb;