import { clerkClient } from "@clerk/express";

// Middlewares (protect educator routes)

export const protectEducator = async (req,res,next) => {
    try{
        const userId = req.auth.userId
        const response = await clerkClient.users.getUser(userId);
        
        if(response.publicMetadata.role !== 'educator'){
            return res.json({success : false, messsage : 'Unauthorized Access'})

        }
        next()


    }catch(error) {
        res.json({success : false, messsage : error.messsage}) 
    }
}