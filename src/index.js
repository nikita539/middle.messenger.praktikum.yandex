import HandleBars from 'handlebars'
import LoginPage from '../src/pages/log_in.hbs'
import { template } from "./partials/input/input";

document.addEventListener('DOMContentLoaded', function () {
    document.body.innerHTML = LoginPage({
        title: "Вход",
        labelTextUp: "Name",
        labelTextDown: "Password",
    })

    Handlebars.registerPartial("Input", template)
    const button = document.getElementById('login_button')

    button.addEventListener('click', function (e) {
        e.preventDefault()
        console.log(this)
    })
})
