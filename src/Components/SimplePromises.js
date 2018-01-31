
export const SimplePromises = () => {

    const example = new Promise((res, rej) => {
        //Use resolve or reject to derermine the fate of the promise
        //rej(new Error("rejected"))
        res(123)
    })

    const example2 = example.then(val => {
        console.log(val)
        return val
    })

    example2.then(val => {
        console.log(val)
    })


    example.catch(error => {
        console.log(error)
    })

}
