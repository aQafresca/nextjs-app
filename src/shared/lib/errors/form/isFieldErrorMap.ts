export type FieldErrorValue = string | string[];
export type FieldErrorMap = Record<string, FieldErrorValue>;

export function isFieldErrorMap(value: unknown): value is FieldErrorMap {
  const isObject = typeof value === 'object' && value !== null;

  if (!isObject) return false;

  return Object.values(value).every((val) => {
    const isString = typeof val === 'string';
    const isArrayOfStrings =
      Array.isArray(val) && val.every((item) => typeof item === 'string');

    return isString || isArrayOfStrings;
  });
}
