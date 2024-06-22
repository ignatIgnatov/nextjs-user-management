import mongoose from "mongoose";


const connectToDb = async () => {
    const url = process.env.DATABASE_URL;

    mongoose.connect(url)
        .then(() => {
            console.log('Database connection is successful');
        })
        .catch(error => console.log(error))
}

export default connectToDb;
