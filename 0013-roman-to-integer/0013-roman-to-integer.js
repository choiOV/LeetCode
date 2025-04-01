/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                if (s[i] + s[i + 1] === "IV") {
                    result.push(4);
                    i++;
                    break;
                }

                if (s[i] + s[i + 1] === "IX") {
                    result.push(9);
                    i++;
                    break;
                }
                result.push(1);
                break;
            case "V":
                result.push(5);
                break;
            case "X":
                if (s[i] + s[i + 1] === "XL") {
                    result.push(40);
                    i++;
                    break;
                }

                if (s[i] + s[i + 1] === "XC") {
                    result.push(90);
                    i++;
                    break;
                }

                result.push(10);
                break;
            case "L":
                result.push(50);
                break;
            case "C":
                if (s[i] + s[i + 1] === "CD") {
                    result.push(400);
                    i++;
                    break;
                }

                if (s[i] + s[i + 1] === "CM") {
                    result.push(900);
                    i++;
                    break;
                }
                result.push(100);
                break;
            case "D":
                result.push(500);
                break;
            case "M":
                result.push(1000);
                break;
        }
    }

    return result.reduce((acc, value, cIndex, array) => {
        if (value < array[cIndex + 1]) {
            return (acc += array[cIndex + 1] - value);
        }

        return (acc += value);
    });
};

// 12:44 풀이시작 - 01:18 풀이종료

/**
    큰 숫자가 작은 숫자보다 앞에 있다면 일반적인 숫자 세기를 진행하면 된다.
    만약 작은 숫자가 큰 숫자보다 앞에 있다면 작은 숫자에서 큰 숫자를 뺀 뒤, 그 숫자를 반환한다.

    어떻게 하면 s를 value로 변환할 수 있을까
    스위치문을 사용해 s의 요소 하나하나를 변환해 반환한다.

    로마숫자에 +, - 기호를 붙인다.
        IV, IX라면 4, 9로 변환한다.
    실제 숫자로 변환한다.
    연산을 진행하고 그 값을 반환한다.
    
 */