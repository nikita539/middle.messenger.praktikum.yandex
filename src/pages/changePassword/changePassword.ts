import Block from "../../core/Block";


interface ChangePasswordProps {
    changeData: boolean
}

export class Page extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps = { changeData: false }) {
        super({...props});
    }

    render(): string {
        return `<div class="profile-page">
    <div class="profile-page__user-info">
        <input class="profile-page__avatar-changeable" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" type="image">
        <span class="profile-page__name">Никита Евтеев</span>
    </div>
    <div class="profile-page__user-detail">
        {{#if changeData}}
            <div class="profile-page__row">
                <span class="profile-page__title">Почта</span>
                <input class="profile-page__info-input" placeholder="evteev_n@inbox.ru" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Логин</span>
                <input class="profile-page__info-input" placeholder="evteev_n" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Имя</span>
                <input class="profile-page__info-input" placeholder="Никита" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Фамилия</span>
                <input class="profile-page__info-input" placeholder="Евтеев" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Имя в чате</span>
                <input class="profile-page__info-input" placeholder="Никита" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Телефон</span>
                <input class="profile-page__info-input" placeholder="+7 (909) 967 30 30" />
            </div>
        {{else}}
            <div class="profile-page__row">
                <span class="profile-page__title">Старый пароль</span>
                <input class="profile-page__info-input" placeholder="*******" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Новый пароль</span>
                <input class="profile-page__info-input" placeholder="**********" />
            </div>
            <div class="profile-page__row">
                <span class="profile-page__title">Повторить новый пароль</span>
                <input class="profile-page__info-input" placeholder="**********" />
            </div>
        {{/if}}
    </div>
    <button class="submit__button profile-page__button">Сохранить</button>
</div>`
    }

}
