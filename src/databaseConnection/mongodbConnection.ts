import { connect } from 'mongoose';

export const connectToMongo = async () => {
    try {  
        const mongoConnection = 'mongodb+srv://srishtidhamal:MuQtLBcfvyXlny4j@cluster0.gos63lm.mongodb.net/?retryWrites=true&w=majority';
        await connect(mongoConnection || '');
        console.log('Connected to mongo sucessfully');
        return true;
    } catch(e) {
        console.log(e)
        throw { message: 'Failed to connect to mongoDb ' }
    }
}
