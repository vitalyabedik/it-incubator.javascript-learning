export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithSkillsType = UserType & {
    skills: Array<number>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = copy.hair / power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }

    // const copy = {
    //     ...u
    // }
    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {...u, books: [...u.books, ...newBooks]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}

    // const copy = {
    //     ...u,
    //     books: u.books.map(b => {
    //         if (b === oldBook) {
    //             return newBook
    //         } else {
    //             return b
    //         }
    //     })
    //     books: [...u.books] // -> копию делает map
    // }

}

export function updateSkill(u: UserWithLaptopType & UserWithBooksType & UserWithSkillsType, oldSkill: number, newSkill: number) {
    return ({...u, skills: u.skills.map(s => s === oldSkill ? newSkill : s)})
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {...u, books: u.books.filter(b => b !== bookForDelete)}
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: { id: number, title: string }) {
    return {...u, companies: [...u.companies, newCompany]}
}

export function updateCompanyTitle(u: WithCompaniesType, companyID: number, newTitle: string) {
    return {...u, companies: u.companies.map(c => c.id === companyID ? {...c, title: newTitle} : c)}

    // const copy: WithCompaniesType = {
    //     ...u,
    //     companies: u.companies.map(c => {
    //         if (c.id === companyID) {
    //             return {...c, title: newTitle}
    //         }   else return c
    //     })
    // }
    //
    // return copy
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<{ id: number, title: string }> },
                                    userName: string,
                                    companyID: number,
                                    newTitle: string
) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)

    return companyCopy
}