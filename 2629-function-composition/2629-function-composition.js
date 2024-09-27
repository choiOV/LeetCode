const compose = (functions) => {
    return function (x) {
        if (functions.length === 0) return x;
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
};