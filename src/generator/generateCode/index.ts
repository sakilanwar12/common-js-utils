

type TGenerateCode = {
    type?: "number" | "string" | "all";
    length?: number;
};

type TReturnType = string;

const CHAR_SETS = {
    number: "0123456789",
    string: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    all: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
};

function generateCode({ type = "all", length = 6 }: TGenerateCode = {}): TReturnType {
    const charset = CHAR_SETS[type];
    if (!charset) {
        throw new Error(`Unsupported type: ${type}`);
    }
    if (length == null || length <= 0) {
        throw new Error(`Length must be a positive number`);
    }

    let result = "";

    for (let i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    
    return result;
}

export { generateCode };