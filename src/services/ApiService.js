import { connection } from "@/utils/connection";

export class JokeBook {

    static async getAllJokes (){
        try{
            const { data } = await connection.get('/jokes');
            return data;
        } catch(error){
            return error.response;
        }
        
    }
}