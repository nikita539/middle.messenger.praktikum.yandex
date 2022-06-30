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

export class Page extends Block<LoginPageProps> {
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
        const onFocus = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.errors[target.name] = " "
            }
        }

        const onBlur = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target) {
                this.state.validators[target.name]()
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
                email: "",
                login: "",
                first_name: "",
                second_name: "",
                phone: "",
                password: "",
                password_confirm: "",
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
                    const nextState = { ...this.state }
                    const validationResult = emailValidation(this.state.values.email)
                    if (validationResult.isFailure) {
                        nextState.errors.email = validationResult.error
                    } else {
                        nextState.errors.email = ""
                    }
                    this.setState(nextState)
                },
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
                first_name: () => {
                    const nextState = { ...this.state }
                    const validationResult = nameValidation(this.state.values.first_name);
                    if (validationResult.isFailure) {
                        nextState.errors.first_name = validationResult.error;
                    } else {
                        nextState.errors.first_name = "";
                    }
                    this.setState(nextState);
                },
                second_name: () => {
                    const nextState = {...this.state}
                    const validationResult = nameValidation(this.state.values.second_name);
                    if (validationResult.isFailure) {
                        nextState.errors.second_name = validationResult.error;
                    } else {
                        nextState.errors.second_name = "";
                    }
                    this.setState(nextState);
                },
                phone: () => {
                    const nextState = { ...this.state }
                    const validationResult = phoneValidation(this.state.values.phone);
                    if (validationResult.isFailure) {
                        nextState.errors.phone = validationResult.error;
                    } else {
                        nextState.errors.phone = "";
                    }
                    this.setState(nextState);
                },
                password: () => {
                    const nextState = { ...this.state };
                    const validationResult = passwordValidation(this.state.values.password);
                    if (validationResult.isFailure) {
                        nextState.errors.password = validationResult.error;
                    } else {
                        nextState.errors.password = "";
                    }
                    this.setState(nextState);
                },
                password_confirm: () => {
                    const nextState = { ...this.state };
                    const validationResult = passwordValidation(
                        this.state.values.password_confirm
                    );
                    if (validationResult.isFailure) {
                        nextState.errors.password_confirm = validationResult.error;
                    } else {
                        nextState.errors.password_confirm = "";
                    }
                    this.setState(nextState);
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
                labelText="Почта" 
                name="email"    
                value="${values.email}"
                errorText="${errors.email}"                
            }}}
            {{{ InputBlock 
                labelText="Логин" 
                name="login"                                 
                value="${values.login}"
                errorText="${errors.login}"               
            }}}
            {{{ InputBlock 
                labelText="Имя" 
                name="first_name"               
                value="${values.first_name}"
                errorText="${errors.first_name}"                
            }}}
            {{{ InputBlock 
                labelText="Фамилия" 
                name="second_name"                                                 
                value="${values.second_name}"
                errorText="${errors.second_name}"                
            }}}
            {{{ InputBlock 
                labelText="Телефон" 
                name="phone"                                                 
                value="${values.phone}"
                errorText="${errors.phone}"                
            }}}
            {{{ InputBlock 
                labelText="Пароль" 
                name="password"                                                  
                value="${values.password}"
                errorText="${errors.password}"                
            }}}
            {{{ InputBlock 
                labelText="Пароль (еще раз)"
                name="password_confirm"                                                
                value="${values.password_confirm}"
                errorText="${errors.password_confirm}"                
            }}}
        <div class="first-page__footer">
            <button class="submit__button">Зарегистрироваться</button>
            <a class="first-page__footer-link" href="./signin.html">Войти</a>
        </div>
    </form>
</div>`
    }
}
