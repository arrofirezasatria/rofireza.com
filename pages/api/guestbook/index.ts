import type { NextApiRequest, NextApiResponse } from 'next';
/* 
import prisma from 'lib/prisma'; */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method==='GET'){
    /*     const entries = await prisma.guestbook.findMany({
            orderBy:{
                updated_at:'desc'
            }
        }) */

        return res.status(200).json({message:'guestbook work',success:true});
    }

    if(req.method==='POST'){
        
    }

}