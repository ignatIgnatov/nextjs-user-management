import mongoose from "mongoose";


const connectToDb = async () => {
    const url = 'mongodb+srv://promptopia:twWhwov7pt4mRZEw@cluster0.hiuu2xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    mongoose.connect(url)
        .then(() => {
            console.log('Database connection is successful');
        })
        .catch(error => console.log(error))
}

export default connectToDb;
