import { getValue } from "./modules/get";

const helloWorld = {
    hello: "hello",
}

const value = getValue(helloWorld, 'hello')

console.log(typeof value)
