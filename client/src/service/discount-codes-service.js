const discountCodes = ['VENN'];

export function discountCodeExists(code) {
    return discountCodes.includes(code.toUpperCase());
}