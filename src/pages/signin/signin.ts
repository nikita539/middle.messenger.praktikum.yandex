import Block from "../../core/Block";


interface SignInProps {
    title: string
}


export class SignInPage extends Block {
    constructor(props: SignInProps) {
        const onChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.values[target.name] = target.value
            }
        }

        const onSubmit = (e: Event) => {
            console.log(this.state)
            e.preventDefault()
        }

        const propsToComponent = {
            ...props,
            events: {
                input: onChange,
                submit: onSubmit,
            }
        }
        super(propsToComponent);
    }

    protected getStateFromProps(props: any) {
        this.state = {
            values: {
                login: '',
                password: ''
            }
        }
    }

    render(): string {
        const { values } = this.state
        return `<div class="first-page">
    <h2 class="first-page__title" >{{title}}</h2>
    <form class="first-page__form" id="form">
        <div class="first-page__form-fields">
            {{{ 
            InputBlock 
            labelText='Логин'
            name='login' 
            value="${values.login}"
            id='login_first_page'
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='Пароль'
            name='password' 
            value="${values.password}" 
            id='password_first_page'
            errorText='error'
            }}}
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
