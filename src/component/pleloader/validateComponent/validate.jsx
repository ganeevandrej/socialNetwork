export const required = (value) => {
    if(value) return undefined;
    return "Поле Обязательное";
}

export const maxlenght = (maxlengths) => (value) => {
    debugger
    if(value.length > maxlengths) return `Максимальное кол-во символов ${maxlengths}`;
    return undefined;
}