type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    cityTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: 'Vitaly',
    age: 29,
    isActive: true,
    address: {
        cityTitle: 'Surganova 2',
        city: {
            title: 'Soligorsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)