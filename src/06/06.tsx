import React, {ChangeEvent, MouseEvent} from 'react'

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.value)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >
                Dimych
            </textarea>
            <div>
                <input type='number' onChange={onAgeChanged}/>
            </div>
            <div>
                <button name="search" onClick={search}>search</button>
            </div>
        </div>
    )
}


// import {GovernmentBuildingType, HouseType} from '../02/02_02';
// import {findAllByDisplayValue} from '@testing-library/react';
// import * as diagnostics_channel from 'diagnostics_channel';
//
// export const getStreetsTitles0fGovernmentsBuildings =
//     (buildings: Array<GovernmentBuildingType>) => {
//         return buildings.map(b => b.address.street.title)
//     }
//
//
// export const getStreetsTitlesOfHouses =
//     (houses: Array<HouseType>) => {
//         return houses.map(b => b.address.street.title)
//     }
//
// // export const createMessages =
// //     (houses: Array<HouseType>) => {
// //         return houses.map(h => `Hello guys from ${h.address.street.title}`)
// //     }
//
// export const createMessages = (houses: Array<HouseType>) => {
//     let callbackfn = (h: HouseType) => {
//         return `Hello guys from ${h.address.street.title}`
//     };
//
//     let newArray = houses.map(callbackfn)
//
//     return newArray
// }
//
// const callback = () => {
//     alert('hey')
// }
//
// window.setTimeout(callback, 1000)