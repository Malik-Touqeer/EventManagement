import mongoose from "mongoose";


export const dbConnection=()=>{
    mongoose.connect("mongodb+srv://EventManagement:EventManagement@cluster0.twagh.mongodb.net/?retryWrites=true",{dbName:"MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log ("Connected to database!")
    }).catch(err=>{
        console.log("Some error occured while connected database" , err)
    })


}