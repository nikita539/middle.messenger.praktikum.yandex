import SignInPage from "../src/pages/sign_in.hbs"
import ChatFeed from '../src/pages/chat_feed.hbs'
import LogINPage from '../src/pages/log_in.hbs'
import Profile from '../src/pages/profile.hbs'
import ChangeData from '../src/pages/change_profile_data.hbs'
import WarningPage from '../src/pages/warning_page.hbs'

const CHAT_FEED_PATH = "/chat_feed";
const SIGN_IN_PATH = "/sign_in";
const LOG_IN_PAGE_PATH = "/log_in";
const PROFILE = "/profile";
const CHANGE_PASSWORD = "/change_password";
const CHANGE_PROFILE_DATA = "/change_profile_data";
const WARNING_404 = "/warning_404";
const WARNING_500 = "/warning_500";


document.addEventListener('DOMContentLoaded', function () {
    let pathName = window.location.pathname
    const root = document.getElementById('root')
    root.innerHTML = function () {
        switch (pathName) {
            case CHAT_FEED_PATH:
                return ChatFeed({
                    userChat: true,
                })
            case SIGN_IN_PATH:
                return SignInPage({})
            case LOG_IN_PAGE_PATH:
                return LogINPage({})
            case PROFILE:
                return Profile({})
            case CHANGE_PASSWORD:
                return ChangeData({})
            case CHANGE_PROFILE_DATA:
                return ChangeData({
                    changeData: true
                })
            case WARNING_404:
                return WarningPage({})
            case WARNING_500:
                return WarningPage({
                    errorCode: true
                })
            default:
                return LogINPage({})
        }
    }();

    const button = document.getElementById('login_button')

    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.pathname = "/chat_feed"
        })
    }
})
