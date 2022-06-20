import Block from "../../core/Block";


interface SignInProps {
    title: string
}


export class SignInPage extends Block {
    constructor(props: SignInProps) {
        super({...props});
    }

    render(): string {
        return `<div class="first-page">
    <h2 class="first-page__title" >{{title}}</h2>
    <form class="first-page__form" id="form">
        <div class="first-page__form-fields">
            {{{InputBlock labelText='Логин' id='login_first_page'}}}
            {{{InputBlock labelText='Пароль' id='password_first_page'}}}
        </div>
        <div class="first-page__footer">
            <button
                    class="submit__button"
                    id="login_button"
                    type="submit"
            >Sign in</button>
            <a class="first-page__footer-link" href="./log_in.hbs">нет аккаунта?</a>
        </div>
    </form>
</div>`
    }
}
