import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateSkill,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType, WithCompaniesType
} from './10';
import exp from 'constants';

test('change hair', () => {
    const user: UserType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    // shallow copy
    expect(awesomeUser.address).toBe(user.address)
})

test('change adress', () => {
    let user: UserWithLaptopType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Minsk')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('update laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const upgratedLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgratedLaptop)
    expect(user.address).toBe(upgratedLaptop.address)

    expect(user.laptop).not.toBe(upgratedLaptop.laptop)
    expect(upgratedLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
})


test('change house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest API'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toStrictEqual('ts')
    expect(userCopy.books[5]).toStrictEqual('rest API')
})

test('update book js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toStrictEqual('ts')
})

test('update skill from 20 to 55', () => {
    let user: UserWithLaptopType & UserWithBooksType & UserWithSkillsType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react'],
        skills: [10, 20, 30, 40]
    }

    const userCopy = updateSkill(user, 20, 55)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.skills).not.toBe(userCopy.skills)
    expect(userCopy.skills[1]).toStrictEqual(55)
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toStrictEqual('react')
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)

    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2]).toStrictEqual({id: 3, title: 'Google'})
})

test('update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company associative array', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vitali',
        hair: 32,
        address: {
            city: 'Soligorsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'}
        ]
    }

    let companies = {
        'Vitali': [{id: 1, title: 'Епам'}, {id: 1, title: 'IT-INCUBATOR'}],
        'Dimych': [{id: 2, title: 'IT-INCUBATOR'}],
    }

    const copy = updateCompanyTitle2(companies, 'Vitali', 1, 'EPAM')

    expect(copy['Vitali']).not.toBe(companies[ 'Vitali'])
    expect(copy['Dimych']).toBe(companies[ 'Dimych'])
    expect(copy['Vitali'][0].title).toBe('EPAM')
})

