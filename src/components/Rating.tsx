import React, { useEffect, useState } from 'react';
import { ICONS } from '../assets/constant';
import { RatingContainer } from './Rating.style';

interface Props {
    rate : number
}

const Rating = ({ rate }: Props) => {

    const rateRound = Math.trunc(rate / 2)
    const [ratingStars, setRatingStars] = useState<string[]>([])

    useEffect(() => {
        let nbFullStars =  rateRound
        let tabTemp: string[] = []

        let haflStarSet = false
        let isHalfStar = false
        const firstDecimal = Math.round((rate/2 - rateRound) * 10)
        if(firstDecimal >= 5) {
            isHalfStar = true
        }

        for(let i = 0; i < 5 ; i++) {
            if(nbFullStars > 0) {
                tabTemp.push(ICONS.starFull)
                nbFullStars = nbFullStars - 1
            } else {
                if(!haflStarSet && isHalfStar) {
                    tabTemp.push(ICONS.starHalf)
                    haflStarSet = true
                } else {
                    tabTemp.push(ICONS.starEmpty)
                }
            }
        }

        setRatingStars(tabTemp)
        console.log(rate / 2)
    }, [])


    return (
        <RatingContainer>
            <div>
            {
                ratingStars &&
                ratingStars.map((star, index: number) => (
                    <i 
                        key={index}
                        className={star}
                        style={{
                            animation: `0.3s ${(1 + index*0.1)}s both starArrive`
                        }}
                    ></i>
                ))
            }
            </div>
        </RatingContainer>
    );
};

export default Rating;