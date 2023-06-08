// 변수 선언
/*
1. list: 전체 list의 첫 번째, 마지막 li를
각각 마지막과 첫 번째로 보내면서 슬라이더가 순환하는 구조이기 때문에
list를 변수로 담는다

nth-of-type(nth-child)을 그대로 살리고
append와 prepend를 사용해서 li를 붙이고 떼어주면서 순환하는 슬라이더
data-index는 사용하지 않는다

첫 번째로 배운 loop 슬라이드의 원리: nth-of의 순서를 가지지 않고
data-index를 이용해서 고유한 스타일을 유지한 채로 슬라이더 DOM구조를
변형시켜서 loop 슬라이더를 구현한다

두 번째로 배우는 loop 슬라이드의 원리: nth-of의 순서를 그대로 둔 채
슬라이더 DOM구조를 변형시켜서 loop 슬라이더를 구현한다
*/
let list = document.querySelector(".list");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// prev 버튼을 클릭하면
prev.addEventListener("click", () => {
    // 마지막 슬라이드 li를 떼어 list의 가장 앞부분에 넣어줌으로써
    // 전체 li를 순서를 밀어서 이전 슬라이드가 보이도록 한다 -> prepend
    list.prepend(list.lastElementChild);
    prev.classList.add("on");
    setTimeout(() => {
        prev.classList.remove("on");
    }, 500);
})

// next 버튼을 클릭하면
next.addEventListener("click", () => {
    // 첫 번째 슬라이드 li를 떼어 list의 가장 뒷부분에 넣어줌으로써
    // 전체 li를 순서를 밀어서 다음 슬라이드가 보이도록 한다 -> append
    list.append(list.firstElementChild);
    next.classList.add("on");
    setTimeout(() => {
        next.classList.remove("on");
    }, 500);
})