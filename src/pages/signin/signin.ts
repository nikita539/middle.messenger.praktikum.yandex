import Block from "../../core/Block";
import { passwordValidation, loginValidation } from "../../modules/validation";


interface SignInProps {
    title: string
}


export class Page extends Block<SignInProps> {
    constructor(props: SignInProps) {
        const onChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.values[target.name] = target.value
            }
        }

        const onSubmit = (e: Event) => {
            this.validate()
            e.preventDefault()
        }

        const onBlur = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.validators[target.name]()
            }
        }

        const onFocus = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.errors[target.name] = " "
            }
        }

        const propsToComponent = {
            ...props,
            events: {
                input: onChange,
                submit: onSubmit,
                focusin: onFocus,
                focusout: onBlur,
            }
        }
        super(propsToComponent);
    }

    protected getStateFromProps(props: any) {
        this.state = {
            values: {
                login: '',
                password: ''
            },
            errors: {
                password: '',
                login: '',
            },
            validators: {
                login: () => {
                    const nextState = { ...this.state }
                    const validationResult = loginValidation(this.state.values.login);
                    if (validationResult.isFailure) {
                        nextState.errors.login = validationResult.error;
                    } else {
                        nextState.errors.login = "";
                    }
                    this.setState(nextState);
                },
                password: () => {
                    const nextSate = { ...this.state };
                    const validationResult = passwordValidation(this.state.values.password);
                    if (validationResult.isFailure) {
                        nextSate.errors.password = validationResult.error;
                    } else {
                        nextSate.errors.password = "";
                    }
                    this.setState(nextSate);
                },
            },
        }
    }

    validate() {
       Object.values(this.state.validators).forEach(fn => (fn as () => void)())
    }

    render(): string {
        const { values, errors } = this.state
        return `<div class="first-page">
    <h2 class="first-page__title" >{{title}}</h2>
    <form class="first-page__form" id="form">
        <div class="first-page__form-fields">
            {{{ InputBlock 
            labelText='Логин'
            name='login' 
            value="${values.login}"
            id='login_first_page'
            errorText="${errors.login}"
            }}}
            
            {{{ InputBlock 
            labelText='Пароль'
            name='password' 
            value="${values.password}" 
            id='password_first_page'
            errorText="${errors.password}"
            }}}
        </div>
        <div class="first-page__footer">
            <button
                    class="submit__button"
                    id="login_button"
                    type="submit"
            >Sign in</button>
            <a class="first-page__footer-link" href="./login.html">нет аккаунта?</a>
        </div>
    </form>
</div>`
    }
}
