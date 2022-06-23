import { registerComponent } from "../core";
import { renderDOM } from "../core";
import  LoginPage from '../pages/login'
import InputBlock  from '../components/input'


registerComponent(InputBlock)

document.addEventListener("DOMContentLoaded", function () {
    renderDOM(LoginPage)
})
