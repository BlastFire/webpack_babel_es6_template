
const delay = ms => new Promise(res => setTimeout(res, ms))


export const myFunc = async (cb) => {

    await delay(1000)
    cb("cb1")
    await delay(1000)
    cb("cb2")
    await delay(1000)
    cb("cb3")

}
