import Block from "../../core/Block";


export class Page extends Block<{}> {

    render(): string {
        return `<div class="warning-page">
        <h1 class="warning-page__error-text">500</h1>
        <h2 class="warning-page__subtitle">Мы уже фиксим</h2>
    <a class="warning-page__link" href="./chat.html">назад к чатам</a>
</div>`
    }
}
