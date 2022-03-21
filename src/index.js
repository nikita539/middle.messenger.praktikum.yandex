import { getValue } from "./modules/get";
const Handlebars = require("handlebars");
import template from 'src/pages/log_in.hbs'

const helloWorld = {
    hello: "hello",
}

const value = getValue(helloWorld, 'hello')

console.log(typeof value)
