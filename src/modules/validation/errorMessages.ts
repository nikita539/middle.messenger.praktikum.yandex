export const CommonErrors  = {
    Required: "Требуется значение."
}

export const EmailErrors = {
    Required: "Требуется почта.",
    WrongStructure: "Почта указана неверно."
}
export const LoginErrors = {
    Required: "Требуется логин.",
    MinMaxLength: (
        minLoginLength: number,
        maxLoginLength: number
    ) => {
        return `Длина логина должна быть от ${minLoginLength} до ${maxLoginLength} символов.`
    },
    WrongStructure: "Логин может содержать цифры, но не состоять из них, латиница, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)."
}

export const NameErrors = {
    Empty: "Имя не может быть пустым.",
    WrongStructure:
        "Первая буква должна быть заглавной, латиница или кириллица, без пробелов и без цифр, нет спецсимволов (допустим только дефис)."
}

export const PasswordErrors = {
    Required: "Требуется пароль.",
    WrongStructure:
        "Пароль должен содержать хотя бы одну заглавную букву и цифру.",
    MinMaxLength: (
        minPasswordLength: number,
        maxPasswordLength: number
    ) =>
        `Длина пароля должна быть от ${minPasswordLength} до ${maxPasswordLength} символов.`
}

export const PhoneErrors =  {
    Required: "Требуется телефон.",
    MinMaxLength: (
        minPhoneLength: number,
        maxPhoneLength: number
    ) =>
        `Длина телефона должна быть от ${minPhoneLength} до ${maxPhoneLength} символов.`,
    WrongStructure:
        "Телефон должен состоять из цифр, может начинается с плюса.",
}

export const ChatErrors = {
    MessageRequired: "Напишите сообщение"
}
