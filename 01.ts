const sentence = 'hello my friends!'

export const splitIntoWords =(sentence:string) => {
    return sentence
        .split(' ')
        .map(m=>m.replace('!',''))
}

export const sum =(a:number,b:number) => {
    return a + b
}

export const multiply =(a:number,b:number) => {
    return a * b
}
