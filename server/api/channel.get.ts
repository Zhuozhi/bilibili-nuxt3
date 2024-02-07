// get /api/channel
import channel from "~/database/channel"
export default defineEventHandler(()=>{
    return channel
    // return {
    //     status:200,
    //     body:{
    //         message:'hello world'
    //     }
    // }
})