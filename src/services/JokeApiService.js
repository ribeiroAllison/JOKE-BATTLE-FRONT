import { jokeConnection } from "@/utils/connection"

export class JokeApi{

    static async getTwojokes(){
        try{
            const { data } = await jokeConnection.get('/v1/dadjokes?limit=2')
            return data;
        } catch (error){
            return error.response;
        }
    }
}