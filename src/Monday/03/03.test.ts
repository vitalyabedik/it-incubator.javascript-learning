// import {StudentType} from '../02/02'
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Vitaly',
        age: 29,
        isActive: false,
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
})


test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)      // ожидается такая-то длина
    expect(student.technologies[3].title).toBe("JS") // ожидается такое-то свойство
    expect(student.technologies[3].title).toBeDefined()      // определено свойство
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('student live in city?', () => {
    expect(student.isActive).toBe(false)

    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Soligorsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})