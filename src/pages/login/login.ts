import Block from "../../core/Block";
import {
    emailValidation,
    loginValidation,
    phoneValidation,
    nameValidation,
    passwordValidation
} from "../../modules/validation";

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
            this.validate()
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
            },
            errors: {
                email: "",
                login: "",
                first_name: "",
                second_name: "",
                phone: "",
                password: "",
                password_confirm: "",
            },
            validators: {
                email: () => {
                    const validationResult = emailValidation(this.state.values.email);
                    if (validationResult.isFailure) {
                        this.state.errors.email = validationResult.error;
                    } else {
                        this.state.errors.email = "";
                    }
                    this.setState(this.state);
                },
                login: () => {
                    const validationResult = loginValidation(this.state.values.login);
                    if (validationResult.isFailure) {
                        this.state.errors.login = validationResult.error;
                    } else {
                        this.state.errors.login = "";
                    }
                    this.setState(this.state);
                },
                first_name: () => {
                    const validationResult = nameValidation(this.state.values.first_name);
                    if (validationResult.isFailure) {
                        this.state.errors.first_name = validationResult.error;
                    } else {
                        this.state.errors.first_name = "";
                    }
                    this.setState(this.state);
                },
                second_name: () => {
                    const validationResult = nameValidation(this.state.values.second_name);
                    if (validationResult.isFailure) {
                        this.state.errors.second_name = validationResult.error;
                    } else {
                        this.state.errors.second_name = "";
                    }
                    this.setState(this.state);
                },
                phone: () => {
                    const validationResult = phoneValidation(this.state.values.phone);
                    if (validationResult.isFailure) {
                        this.state.errors.phone = validationResult.error;
                    } else {
                        this.state.errors.phone = "";
                    }
                    this.setState(this.state);
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
                password_confirm: () => {
                    const nextSate = { ...this.state };
                    const validationResult = passwordValidation(
                        this.state.values.password_confirm
                    );
                    if (validationResult.isFailure) {
                        nextSate.errors.password_confirm = validationResult.error;
                    } else {
                        nextSate.errors.password_confirm = "";
                    }
                    this.setState(nextSate);
                },
            },
        }
    }

    validate() {
        Object.values(this.state.validators).forEach((fn) => (fn as () => void)())
    }

    render(): string {
        const { values, errors } = this.state
        return `<div class="first-page">
    <h2 class="first-page__title">Регистрация</h2>
    <form class="first-page__form">
            {{{ InputBlock 
            labelText='email' 
            value="${values.email}" 
            name='email' 
            id='login_first_page' 
            errorText="${errors.email}" 
            }}}
            
            {{{ InputBlock 
            labelText='login' 
            name='login' 
            value="${values.login}" 
            id='login_first_page' 
            errorText="${errors.login}"
            }}}
            
            {{{ InputBlock 
            labelText='name' 
            name='name' 
            value="${values.name}" 
            id='login_first_page' 
            errorText="${errors.first_name}"
            }}}
            
            {{{ InputBlock 
            labelText='last_name' 
            name='last_name' 
            value="${values.last_name}" 
            id='login_first_page' 
            errorText="${errors.second_name}"
            }}}
            
            {{{ InputBlock 
            labelText='number' 
            name='number'
            value="${values.number}" 
            id='login_first_page' 
            errorText="${errors.phone}"
            }}}
            
            {{{ InputBlock 
            labelText='password' 
            name='password' 
            value="${values.password}" 
            id='login_first_page'
            errorText="${errors.password}"
            }}}
            
            {{{ InputBlock 
            labelText='repeat_password' 
            name='repeat_password' 
            value="${values.repeat_password}" 
            id='login_first_page' 
            errorText="${errors.password_confirm}"  
            }}}
        <div class="first-page__footer">
            <button class="submit__button">Зарегистрироваться</button>
            <a class="first-page__footer-link" href="./sign_in.hbs">Войти</a>
        </div>
    </form>
</div>`
    }
}
