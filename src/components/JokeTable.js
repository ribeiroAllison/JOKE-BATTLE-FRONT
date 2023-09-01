import style from "@/styles/joketable.module.css"


export default function JokeTable(props){


    return(
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Top Jokes!</th>
                    <th>Total Votes</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    props.topJokesList &&
                        props.topJokesList.map(joke => {
                            return(
                                <tr>
                                    <td className={style.jokes}>{joke.joke}</td>
                                    <td className={style.scores}>{joke.stars}</td>
                                </tr>
                            )
                            
                        })
                }
                
            </tbody>
            
        </table>

    )
}