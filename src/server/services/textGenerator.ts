import debug from "debug";
// import { Request, Response } from "express";

const apiDegubber = debug("app:apiDebugger")


import axios from "axios";
import config from "config"
const api = axios.create({
    baseURL : "https://api.api-ninjas.com",
    withCredentials : true
})


export const getText = async()=>{
    return "Lorem ipsum sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui."



   try {
    const response = await api.get("/v1/loremipsum", {

        headers : {
            "X-Api-Key" : config.get("Text_API_KEY"),
        }
    })
    apiDegubber(response.data)
    return response.data.text
   } catch (error: any) {
    console.log(error);
    
   }
}