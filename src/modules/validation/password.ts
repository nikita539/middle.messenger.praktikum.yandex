import { ValidationResult } from "./types";
import { required } from "./common";
import { PasswordErrors } from "./errorMessages";
const minPasswordLength = 8;
const maxPasswordLength = 40;
export const validate = (password: string): ValidationResult => {
    if (required(password).isFailure)
        return ValidationResult.fail(PasswordErrors.Required);
    const length = password.length;
    if (length < 8 || length > 40)
        return ValidationResult.fail(
            PasswordErrors.MinMaxLength(minPasswordLength, maxPasswordLength)
        );
    if (!/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,40}$/.test(password))
        return ValidationResult.fail(PasswordErrors.WrongStructure);
    return ValidationResult.ok();
}
