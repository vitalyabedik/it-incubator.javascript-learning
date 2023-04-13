import React, {useState} from 'react';

export type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}

type propsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

function useVitaliState(m: string) {
    return [m, function () {}]
}

function useVitaliState2(m: string) {
    return {
        message: m,
        setMessage: function () {}
    }
}

export const DestructuringComponent: React.FC<propsType> = (props) => {
// export const DestructuringComponent: React.FC<propsType> = ({title, man, ...props}) => { -> 4ый вариант
    // export const DestructuringComponent: React.FC<propsType> = ({title, man}) => { -> 2ой вариант
    // export const DestructuringComponent: React.FC<propsType> = ({title, man, food, car}) => { -> 3ий вариант
    // const {title, man} = props -> 1ый вариант

    // const [message, setMessage] = useState<string>('hello')
    const [message, setMessage] = useVitaliState('hello')

    const {title, man, ...restProps} = props
    // const restProps2 = {
    //     food: props.food,
    //     car: props.car.model
    // }

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{props.car.model}</div>
            <div>{man.name}</div>
        </div>
    )
}