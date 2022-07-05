import registerComponent from "./core/registerComponents";
import renderDOM from "./core/renderDOM";
import { LoginPage } from '../src/pages/login'
import { SignInPage } from '../src/pages/signin'
import { ProfilePage } from '../src/pages/profile'
import { ChatPage } from '../src/pages/chat'
import { ChangePasswordPage } from '../src/pages/changePassword'
import { ChangeProfileDataPage } from '../src/pages/changeProfileData'
import { ErrorPage404 } from '../src/pages/404'
import { ErrorPage500 } from '../src/pages/500'
import { InputBlock } from '../src/components/input'


registerComponent(InputBlock)

document.addEventListener('DOMContentLoaded', function () {
    const hash = document.location.pathname;
    switch (hash) {
        case '/sign_in.html': {
            renderDOM(SignInPage)
            break;
        }
        case '/log_in.html': {
            renderDOM(LoginPage)
            break;
        }
        case '/profile.html': {
            renderDOM(ProfilePage)
            break;
        }
        case '/chat.html': {
            renderDOM(ChatPage)
            break;
        }
        case '/change_password.html': {
            renderDOM(ChangePasswordPage)
            break;
        }
        case '/change_profile_data.html': {
            renderDOM(ChangeProfileDataPage)
            break;
        }
        case '/404.html': {
            renderDOM(ErrorPage404)
            break;
        }
        case '/500.httml': {
            renderDOM(ErrorPage500)
            break;
        }
        default: {
            renderDOM(SignInPage)
            break;
        }
    }
})
