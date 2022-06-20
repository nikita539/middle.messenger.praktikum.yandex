import Block from "../../core/Block";

interface ProfilePageProps {
    name: string
}


export class ProfilePage extends Block {
    constructor(props: ProfilePageProps) {
        super({...props});
    }

    protected render(): string {
        return `<div class="profile-page">
    <div class="profile-page__user-info">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" class="profile-page__avatar">
        <span class="profile-page__name">{{name}}</span>
    </div>
    <div class="profile-page__user-detail">
        <div class="profile-page__row">
            <span class="profile-page__title">Почта</span>
            <span class="profile-page__info">evteev_n@inbox.ru</span>
        </div>
        <div class="profile-page__row">
            <span class="profile-page__title">Логин</span>
            <span class="profile-page__info">evteev_n</span>
        </div>
        <div class="profile-page__row">
            <span class="profile-page__title">Имя</span>
            <span class="profile-page__info">Никита</span>
        </div>
        <div class="profile-page__row">
            <span class="profile-page__title">Фамилия</span>
            <span class="profile-page__info">Евтеев</span>
        </div>
        <div class="profile-page__row">
            <span class="profile-page__title">Имя в чате</span>
            <span class="profile-page__info">Никита</span>
        </div>
        <div class="profile-page__row">
            <span class="profile-page__title">Телефон</span>
            <span class="profile-page__info">+7 (909) 967 30 30</span>
        </div>
    </div>
    <div class="profile-page__footer">
        <div class="profile-page__row">
            <a class="profile-page__footer-link" href="./change_profile_data.hbs">Изменить данные</a>
        </div><div class="profile-page__row">
        <a class="profile-page__footer-link" href="./change_password.hbs">Изменить пароль</a>
    </div><div class="profile-page__row">
        <a class="profile-page__exit-link">Выйти</a>
    </div>
    </div>
</div>`
    }
}
