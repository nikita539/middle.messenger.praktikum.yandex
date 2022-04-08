const HandleBars = require('handlebars')

export const template = `<div class="input">
                <input class="input__field" id="inputName"/>
                <label class="input__label">
                    {{labelText}}
                </label>
            </div>`

HandleBars.registerPartial('Input', template );
