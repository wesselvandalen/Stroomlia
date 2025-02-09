const discountCodes = ['NOR10'];

export function discountCodeExists(code) {
    return discountCodes.includes(code);
}