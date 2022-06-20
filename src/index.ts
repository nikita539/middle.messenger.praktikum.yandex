import registerComponent from "./core/registerComponents";
import renderDOM from "./core/renderDOM";
import LoginPage from '../src/pages/login'
import SignInPage from '../src/pages/signin'
import ProfilePage from '../src/pages/profile'
import ChatPage from '../src/pages/chat'
import ChangePasswordPage from '../src/pages/changePassword'
import ChangeProfileDataPage from '../src/pages/changeProfileData'
import ErrorPage404 from '../src/pages/404'
import ErrorPage500 from '../src/pages/500'
import InputBlock from '../src/components/input'


registerComponent(InputBlock)

document.addEventListener('DOMContentLoaded', function () {
    const hash = document.location.pathname;
    switch (hash) {
        case '/sign_in.hbs': {
            renderDOM(SignInPage)
            break;
        }
        case '/log_in.hbs': {
            renderDOM(LoginPage)
            break;
        }
        case '/profile.hbs': {
            renderDOM(ProfilePage)
            break;
        }
        case '/chat.hbs': {
            renderDOM(ChatPage)
            break;
        }
        case '/change_password.hbs': {
            renderDOM(ChangePasswordPage)
            break;
        }
        case '/change_profile_data.hbs': {
            renderDOM(ChangeProfileDataPage)
            break;
        }
        case '/404.hbs': {
            renderDOM(ErrorPage404)
            break;
        }
        case '/500.hbs': {
            renderDOM(ErrorPage500)
            break;
        }
        default: {
            renderDOM(SignInPage)
            break;
        }
    }
})
