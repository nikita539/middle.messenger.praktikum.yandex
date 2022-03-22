const Handlebars = require("handlebars");
import log from './pages/log_in.hbs'

document.addEventListener('DOMContentLoaded', function () {
    const templateFn = Handlebars.compile(log)
    console.log(templateFn({ title: "Hello World!" }))
})
