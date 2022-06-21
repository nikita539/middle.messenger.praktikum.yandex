import Block from "../../core/Block";

interface InputProps {
    labelText: string
    id: string
}

export class InputBlock extends Block{
    constructor(props: InputProps) {
        super({...props});
    }
    render(): string {
        return `<div class="input">
                    <input 
                        class="input__field" 
                        id={{id}}
                        name={{name}}
                        {{#if value}}value="{{value}}"{{/if}}
                    />
                    <label class="input__label">
                         {{labelText}}
                    </label>
                    {{#if errorText}}
                    <p class="input__error">{{errorText}}</p>
                    {{/if}}
                 </div>`
    }
}
