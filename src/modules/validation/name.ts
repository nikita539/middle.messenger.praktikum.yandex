import { ValidationResult } from "./types";
import { required } from "./common";
import { NameErrors } from "./errorMessages";
export const validate = (name: string): ValidationResult => {
    if (required(name).isFailure) return ValidationResult.fail(NameErrors.Empty);
    if (!/^[A-ZА-Я]{1}[A-Za-zА-Яа-я-]*$/.test(name))
        return ValidationResult.fail(NameErrors.WrongStructure);
    return ValidationResult.ok();
};
