import {required} from "./common";
import {EmailErrors} from "./errorMessages";
import {ValidationResult} from "./types";

export function validate(email: string): ValidationResult {
    if (required(email).isFailure) {
        return ValidationResult.fail(EmailErrors.Required)
    } if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) return ValidationResult.fail(EmailErrors.WrongStructure)
    return ValidationResult.ok()
}
