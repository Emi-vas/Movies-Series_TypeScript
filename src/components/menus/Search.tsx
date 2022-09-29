import React, { useState } from 'react';
import { BarContainer, SearchBar } from './Search.style';
import { ICONS } from '../../assets/constant';

interface Props {
    type: "movie" | "tv"
}

const Search = ({ type }: Props) => {
    const typePlaceholder = type === "movie" ? "movie" : "serie"
    const [searchValue, setSearchValue] = useState("")
    const [searchChanged, setSearchChanged] = useState(true) //avoid multiple searches with the same term

    const searchItem = () => {
        if(searchChanged) {
            setSearchChanged(false)
            
            
            console.log(searchValue)
        }
    }

    return (
        <div>
            <BarContainer>
                <SearchBar>
                    <input 
                        type="text" 
                        placeholder={`Search for a ${typePlaceholder}`}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            setSearchChanged(true)
                        }}
                    />
                    <i onClick={searchItem} className={ICONS.search}></i>
                </SearchBar>
            </BarContainer>
        </div>
    );
};

export default Search;