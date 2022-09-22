export interface Movie {
    title : string,
    id : number,
    img : string,
    type: "movie" | "tv"
}

export interface Genre {
    id: number,
    name: string,
}