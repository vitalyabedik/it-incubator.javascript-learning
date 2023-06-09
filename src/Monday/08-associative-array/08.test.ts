type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1212': {id: 1212, name: 'Natasha'},
        '1314101': {id: 1314101, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user ', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toEqual('Ekaterina')
})

test('should delete corresponding user ', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})

