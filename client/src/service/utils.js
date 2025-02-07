// Gjør tall leselig (93873 => 93 873 f.e.)
export function makeNumbersReadable(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}