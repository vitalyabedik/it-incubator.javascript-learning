export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '1314101': {id: 1314101, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

//users[1] -> O(1) - доставание

// добавление пользователя в массив, если такой был -> перезатрется
const user = {id: 100500, name: 'Igor'}
users[user.id] = user

// удаление пользователя
delete users[user.id]

// обновление пользователя
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 1314101, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

// usersArray.find(u => u.id === 1) > O(n) - доставание

// добавление, так же может быть дубликат
// const usersCopy = [...usersArray.filter(), user]

// удаление пользователя
const usersArray1 = usersArray.filter(u => u.id !== user.id)

// обновление пользователя
// - мутабельно -> find
// - иммутабельно -> map
