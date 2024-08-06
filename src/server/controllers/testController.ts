import { Request, Response } from "express";
import { getUser } from "./userController";
import { getText } from "../services/textGenerator";

export const getTest = async (req : Request , res : Response)=>{
    const user = await getUser(req);
    if(!user) return res.send("User Not Found");

    try {
        const text = await getText();
        console.log(text);
        
    return  res.render("template", {
        renderDetails : {
            page : "testPage",
            text,
            timer : true,
            scrpit : "test"
        }
    })
    } catch (error: any) {
        console.log(error);
        return res.send("Some thing went wrong")
    }
}

// export const submitTest = async (req : Request , res : Response)=>{
//     const user = await getUser(req);
//     if(!user) return res.send("User Not Found");


// }
