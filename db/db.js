// import mongoose from "mongoose";
// import 'dotenv/config';
// import chalk from "chalk";

// const myurl = process.env.MONGODB_URL;

// const connectToDb = async () => {
//     try {
//         await mongoose.connect(myurl, {
//             dbName: "exam",  // Ensure this is the correct database name
//             serverSelectionTimeoutMS: 5000,  // Timeout for server selection
//             socketTimeoutMS: 45000,  // Timeout for socket communication
//         });

//         console.log(chalk.bgBlue.white('Connected to MongoDB'));
//     } catch (error) {
//         console.error(chalk.bgRed.white('Error connecting to MongoDB:'), error);
//     }
// };

// export default connectToDb;





import mongoose from "mongoose";
import 'dotenv/config'
import chalk from "chalk";
const myurl = process.env.MONGODB_URL

const connectToDb= async()=>{

    try{
        await mongoose.connect( myurl,{dbName:"exam"})
        console.log(chalk.bgBlue.white('connected to MongoDB connection'));
    }
    catch(error){
        console.error("error in showing in db",error)
    }
}

export default connectToDb;