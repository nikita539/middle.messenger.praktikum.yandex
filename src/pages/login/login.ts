import Block from "../../core/Block";

interface LoginPageProps {
    title: string
}

export class LoginPage extends Block {
    constructor(props: LoginPageProps) {
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
                email: '',
                login: '',
                name: '',
                last_name: '',
                number: '',
                password: '',
                repeat_password: ''
            }
        }
    }

    render(): string {
        const { values } = this.state
        return `<div class="first-page">
    <h2 class="first-page__title">Регистрация</h2>
    <form class="first-page__form">
            {{{ InputBlock 
            labelText='email' 
            value="${values.email}" 
            name='email' 
            id='login_first_page' 
            errorText='error' 
            }}}
            
            {{{ InputBlock 
            labelText='login' 
            name='login' 
            value="${values.login}" 
            id='login_first_page' 
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='name' 
            name='name' 
            value="${values.name}" 
            id='login_first_page' 
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='last_name' 
            name='last_name' 
            value="${values.last_name}" 
            id='login_first_page' 
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='number' 
            name='number'
            value="${values.number}" 
            id='login_first_page' 
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='password' 
            name='password' 
            value="${values.password}" 
            id='login_first_page'
            errorText='error'
            }}}
            
            {{{ InputBlock 
            labelText='repeat_password' 
            name='repeat_password' 
            value="${values.repeat_password}" 
            id='login_first_page' 
            errorText='error'
            }}}
        <div class="first-page__footer">
            <button class="submit__button">Зарегистрироваться</button>
            <a class="first-page__footer-link" href="./sign_in.hbs">Войти</a>
        </div>
    </form>
</div>`
    }
}
