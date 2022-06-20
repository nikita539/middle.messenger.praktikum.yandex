import Block from "../../core/Block";

interface ErrorPageProps {
    errorCode: boolean
}

export class ErrorPage404 extends Block {
    constructor(props: ErrorPageProps = { errorCode: false }) {
        super({...props});
    }

    render(): string {
        return `<div class="warning-page">
    {{#if errorCode}}
        <h1 class="warning-page__error-text">500</h1>
        <h2 class="warning-page__subtitle">Мы уже фиксим</h2>
    {{else}}
        <h1 class="warning-page__error-text">404</h1>
        <h2 class="warning-page__subtitle">Не туда попали</h2>
    {{/if}}
    <a class="warning-page__link" href="./chat.hbs">назад к чатам</a>
</div>`
    }
}
