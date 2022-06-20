import Block from "../../core/Block";

interface LoginPageProps {
    title: string
}

export class LoginPage extends Block {
    constructor(props: LoginPageProps) {
        super({...props});
    }
    render(): string {
        return `<div class="first-page">
    <h2 class="first-page__title">Регистрация</h2>
    <form class="first-page__form">
        <div class="first-page__form-fields">
            {{{InputBlock labelText='email' id='login_first_page'}}}
            {{{InputBlock labelText='login' id='login_first_page'}}}
            {{{InputBlock labelText='name' id='login_first_page'}}}
            {{{InputBlock labelText='last_name' id='login_first_page'}}}
            {{{InputBlock labelText='number' id='login_first_page'}}}
            {{{InputBlock labelText='password' id='login_first_page'}}}
            {{{InputBlock labelText='repeat_password' id='login_first_page'}}}
        </div>
        <div class="first-page__footer">
            <button class="submit__button">Зарегистрироваться</button>
            <a class="first-page__footer-link" href="./sign_in.hbs">Войти</a>
        </div>
    </form>
</div>`
    }
}
