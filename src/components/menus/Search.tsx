import React, { useEffect, useState } from 'react';
import { BarContainer, SearchBar } from './Search.style';
import { API_KEY, COLORS, ICONS } from '../../assets/constant';
import axios from 'axios';
import { ListMovies } from '../../styles/Global.style';
import MovieCard from '../MovieCard';

interface Props {
    type: "movie" | "tv"
}

const Search = ({ type }: Props) => {
    const typePlaceholder = type === "movie" ? "movie" : "serie"
    const [searchValue, setSearchValue] = useState("")
    const [searchChanged, setSearchChanged] = useState(true) //avoid multiple searches with the same term
    const [isFocus, setIsFocus] = useState(false)
    const [reloadCard, setReloadCard] = useState(false)

    const [listItems, setListItems] = useState<any>([])
    const [listItemsFiltred, setListItemsFiltred] = useState<any>([])
    const [noRes, setNoRes] = useState(false)

    const searchItem = (force: boolean) => {
        //force = true to force the search whithout changing the searchValue
        if(searchChanged || force) {
            if(searchValue.length > 2) {
                setSearchChanged(false)
                axios
                .get(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
                .then((res) => {
                    const result = res.data.results
                    setListItems(result)

                    // put the err when there is "no result" + check if the result is usable (pictures)
                    let noRes = true
                    result.forEach((item: any) => {
                        if(item.backdrop_path && item.poster_path) {
                            noRes = false
                        }
                    })
                    setNoRes(noRes)
                })
            }
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            searchItem(false)
        }
    }

    useEffect(() => {
        //remove items with no pictures
        let tabtemp = listItems.filter((item: any) => (
            item.backdrop_path && item.poster_path
        ))
        setListItemsFiltred(tabtemp)
    }, [listItems])


    useEffect(() => {
        setListItems([])
        searchItem(true)
        setNoRes(false)
    }, [type])

    return (
        <div>
            <BarContainer>
                <SearchBar
                    style={{
                        borderColor: isFocus ? COLORS.redLight : COLORS.yellow
                    }}
                >
                    <input 
                        defaultValue={searchValue}
                        type="text" 
                        placeholder={`Search for a ${typePlaceholder}`}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            setSearchChanged(true)
                            setNoRes(false)
                            if(listItems[0]) {
                                setListItems([])
                            }
                        }}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <i onClick={() => searchItem(false)} className={ICONS.search}></i>
                </SearchBar>
            </BarContainer>
            
            {
                noRes && 

                <h2 style={{marginLeft: "30px"}}>No result</h2>    
                
            }

            <ListMovies>
                {
                    listItemsFiltred &&
                    listItemsFiltred.map((movie: any, index: number) => (
                        <MovieCard 
                            movie={{
                                title: type == "movie" ? movie.title : movie.name,
                                id: movie.id,
                                img:  movie.poster_path,
                                type: type
                            }} 
                            key={index} 
                            reloadCard={reloadCard} 
                            setReloadCard={setReloadCard}
                        />
                    ))
                }
            </ListMovies>
        </div>
    );
};

export default Search;