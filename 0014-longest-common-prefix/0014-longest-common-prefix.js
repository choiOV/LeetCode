/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.some((e) => e === "")) return "";
  if (strs.length === 1) return strs[0];

  let prefix = "";
  const newStrs = [...strs];

  const newA = newStrs.map((e, i, a) => {
    if (!a[i + 1]) return;
    prefix = "";
    // console.log(e);
    console.log(a[i + 1]);

    for (let j = 0; j < e.length; j++) {
      // console.log(e[j]);
      // console.log(a[i+1][j])
      // if (!a[i+1][j]) break;

      if (e[j] === a[i + 1][j]) {
        prefix += e[j];
      } else {
        break;
      }
    }
    return prefix;
  });

  // console.log(prefix);
  console.log(newA);
  const result = newA.findIndex((e) => e === "");
  console.log(result);
  // if (result !== -1) return "";
  return result !== -1 ? "" : newA[newA.length - 2];
};

/**
    첫 시도
    풀이시간
    17:35 ~ 18:52

    문제 설명
    문자열 배열 중에서 가장 긴 공통 접두사 문자열을 찾는 함수를 작성하세요. 
    공통 접두사가 없는 경우 빈 문자열 ""을 반환합니다.
    소문자만 존재합니다.

    전략
    가장 짧은 문자열을 A라고 칭한다. 
    A의 길이를 기준으로 반복문을 진행한다.
    A를 순회하는 동안 B, C가 동일한 문자열인지 비교하고
    처음부터 일치하지 않는다면 ""를 반환한다.
    더 이상 일치하지 않는 경우에는 현재 A의 처음부터 index까지의 문자열을 반환한다.

    1차 시도 회고
    의사코드를 다시 작성한 후 재도전해야겠음

    두번째 시도
    풀이시간 20:22 ~

    전략
    처음 문자열을 기준으로 다음 요소들을 순차적으로 비교해나간다.
    요소비교는 map을 사용해 하나씩 공통 접두사로 만들면 되지 않을까
    첫 번째 요소는 그대로 두고, 두 번째 요소부터 하면 될 듯
    같은 걸 찾는 방법은 일치하면 변수 prefix에 += 진행, 다음 요소 일때는 변수 빈 문자열로 리셋
        변수로 비교하지 않는 이유는 빼야하는 로직이 추가되기 때문에 조건이 복잡해질 것으로 우려함
    글자 비교는 for of를 사용해 현재 a[i+1] ...
        현재 문자열의 순회는 for of로 진행하지만 비교할 문자열 순회는 어찌 진행해야 할지
        indexOf를 사용해 현재 확인중인 글자와 같은 인덱스를 가지는지 판별한다
        현재 문자열의 인덱스는 j임
        a[i+1][j]가 e[j]와 같다면 +=
        
    첫 글자부터 일치하지 않는 경우 ""를 반환한다.


 */