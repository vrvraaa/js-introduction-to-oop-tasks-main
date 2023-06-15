export class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "ParseError";
    }
}

export function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch {
        throw new ParseError("Ошибка парсинга");
    }
}

export default { ParseError, parseJson }; 