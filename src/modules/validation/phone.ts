import { required } from "./common";
import { ValidationResult } from "./types";
import { PhoneErrors } from "./errorMessages";

export function validate(number: string): ValidationResult {
    if (required(number).isFailure) return ValidationResult.fail(PhoneErrors.Required)
    if (number.length < 10 || number.length > 15) {
        ValidationResult.fail(PhoneErrors.MinMaxLength(10,15))
    }
    if (!/^\+*[0-9]+$/.test(number)) return ValidationResult.fail(PhoneErrors.WrongStructure)
    return ValidationResult.ok()
}
