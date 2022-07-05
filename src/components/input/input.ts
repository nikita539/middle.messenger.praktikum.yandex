import Block from "../../core/Block";

interface InputProps {
    labelText: string
}

export class Component extends Block<InputProps>{
    static componentName = "InputBlock"
    constructor(props: InputProps) {
        super({...props});
    }
    render(): string {
        return `<div class="input">
                    <label class="input__label">
                         {{labelText}}
                    </label>
                    <input 
                        class="input__field" 
                        name={{name}}
                        {{#if value}}value="{{value}}"{{/if}}
                    />
                    {{#if errorText}}
                    <p class="input__error">{{errorText}}</p>
                    {{/if}}
                 </div>`
    }
}
