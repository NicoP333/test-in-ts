import {splitIntoWords, sum} from "../hello-tests/01";

test('sum should be corrected', ()=>{
    //data
    const a = 1
    const b = 2
    const c = 3

    //action
    const result1 = sum(a,b)
    const result2 = sum(c,b)

    //expect
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('sentence should be corrected', ()=>{
    //data
    const sent1 = 'hello my friends!'
    const sent2 = 'js - the best programming language'

    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expect
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

})
