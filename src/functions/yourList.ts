import { Movie } from "../assets/interfaces"

// add a movie to favorit list
export const addToList = (movie: Movie): void => {
    let yourList: any = localStorage.getItem('yourList')

    //If there is a list in storage
    if(yourList) {
        yourList = JSON.parse(yourList)

        //if movie is not already on the list
        if(!isMovieOnList(movie.id, yourList)) {
            yourList = [movie, ...yourList]
        } else {
            //remove item
            yourList = yourList.filter((movieList: Movie) => movieList.id != movie.id)
        }
        
        yourList = JSON.stringify(yourList)
    } else {
        yourList = JSON.stringify([movie])
    }

    localStorage.setItem('yourList', yourList)
}

export const isMovieOnList = (id: number, yourList: Movie[] ): boolean => {
    for(let i in yourList) {
        if(yourList[i].id == id) {
            return true
        }
    }
    return false
}