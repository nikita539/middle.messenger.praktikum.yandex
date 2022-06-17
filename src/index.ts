import registerComponent from "./core/registerComponents";
import renderDOM from "./core/renderDOM";
import LoginPage from '../src/pages/login'
import InputBlock from '../src/components/input'


registerComponent(InputBlock)


document.addEventListener('DOMContentLoaded', function () {
    renderDOM("#root", LoginPage)
})
