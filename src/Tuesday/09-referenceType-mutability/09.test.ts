function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test('reference type test', () => {
    const user: UserType = {
        name: 'Vitali',
        age: 29,
        address: {
            title: 'Soligorsk'
        }
    }

    increaseAge(user)
    expect(user.age).toBe(30)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    const users: UserType[] = [
        {
            name: 'Vitali',
            age: 29,
            address: {
                title: 'Soligorsk'
            }
        },
        {
            name: 'Vitali',
            age: 29,
            address: {
                title: 'Soligorsk'
            }
        },
    ]
    const admins = users

    admins.push({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})
    expect(users[2]).toEqual({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})
})

test('primitives type test', () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount++

    expect(usersCount).toEqual(100)
    expect(adminsCount).toEqual(101)
})

test('object value type test', () => {
    // 3 объекта в памяти address, user, user2
    const address = {
        title: 'Soligorsk'
    }

    const user: UserType = {
        name: 'Vitali',
        age: 29,
        address: address
    }

    // let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 29,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})

test('array value type test', () => {
    // 3 объекта в памяти address, user, user2
    const address = {
        title: 'Soligorsk'
    }

    const user: UserType = {
        name: 'Vitali',
        age: 29,
        address: address
    }
    const user2: UserType = {
        name: 'Natasha',
        age: 29,
        address: address
    }

    const users = [user, user2, {name: 'Valera', age: 27, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Vitalya'

    expect(users[0].name).toBe('Vitalya')
    expect(user.name).toBe('Vitalya')
})

test('sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    letters.sort()

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

