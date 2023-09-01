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

    static async getTopJokes(){
        try{
            const { data } = await connection.get('/jokes/top');
            return data;
        } catch(error){
            return error.response;
        }
    }

    static async addNewJoke(joke){
        try {
            const formData = new URLSearchParams();
            formData.append('joke', joke);
    
            await fetch('http://127.0.0.1:5000/jokes', {
                method: "POST",
                body: formData.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
        } catch(error){
            // Handle errors appropriately
            console.error('An error occurred:', error);
            return error.data;
        }
    }

    static async updateJokeScore(joke){
        try {
            const formData = new URLSearchParams();
            formData.append('joke', joke);
    
            await fetch('http://127.0.0.1:5000/jokes', {
                method: "PUT",
                body: formData.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

        } catch (error) {
            // Handle errors appropriately
            console.error('An error occurred:', error);
            return error.data;
        }
    }
}


export class Dads {

    static async fetchDadsScores(){
        try{
            const { data } = await connection.get('/dads');
            return data;
        } catch(error){
            return error.response;
        }
    }

    static async updateDadScore(name) {
        try {
            const formData = new URLSearchParams();
            formData.append('dad', name);
    
            await fetch('http://127.0.0.1:5000/dads', {
                method: "PUT",
                body: formData.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

        } catch (error) {
            // Handle errors appropriately
            console.error('An error occurred:', error);
            return error.data;
        }
    }
    
}