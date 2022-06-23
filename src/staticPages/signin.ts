import { registerComponent } from "../core";
import { renderDOM } from "../core";
import SignInPage from '../pages/signin'
import InputBlock  from '../components/input'


registerComponent(InputBlock)

document.addEventListener("DOMContentLoaded", function () {
    renderDOM(SignInPage)
})
