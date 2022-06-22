import {required} from "./common";
import {ValidationResult} from "./types";
import {LoginErrors} from "./errorMessages";

export function validate(login:string): ValidationResult {
    if (required(login).isFailure) return ValidationResult.fail(LoginErrors.Required)
    if (login.length < 3 || login.length > 20) {
        return ValidationResult.fail(LoginErrors.MinMaxLength(3,20))
    }
    if (!/(?!^\d+$)^[\w-]+$/.test(login))
        return ValidationResult.fail(LoginErrors.WrongStructure);
    return ValidationResult.ok()
}
