import { ValidationResult } from "./types";
import { CommonErrors } from "./errorMessages"
export const required = (value: string): ValidationResult => {
    if (!value) return ValidationResult.fail(CommonErrors.Required);
    return ValidationResult.ok();
};
