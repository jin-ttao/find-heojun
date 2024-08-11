let clickedCard = [];
let answerCard = [];
let startCnt = 0;

const introPage = document.querySelector(".intro");
const gameBoardPage = document.querySelector(".game-board");
const startBtn = document.querySelector(".startBtn");
const imgBox = document.querySelectorAll(".img-box"); // ^^이 클래스 가진 DOM 요소들 모두 imgBox (NodeList로 잡힘)

startBtn.addEventListener("click", function(){    
    if (startCnt % 2 == 0) {
        startBtn.innerHTML = "다시 시작";
        startCnt++;
        gameStart();
    } else {
        startBtn.innerHTML = "시작!";
        startCnt++;
    }
});
gameBoardPage.addEventListener('click', function(event) { // **event 파라미터 필수?
    let imgElement;
    
    // 클릭된 요소가 <img> 태그인 경우
    if (event.target.tagName === 'IMG') {
        imgElement = event.target.getAttribute("src");
    }
    // 클릭된 요소가 <div.img-box> 태그인 경우
    else if (event.target.classList.contains('img-box')) {
        imgElement = event.target.querySelector('img').getAttribute("src");;
    }
    console.log(imgElement); // <img src=".jpg">
    clickedCard.push(imgElement);
    console.log(clickedCard); // ['img']
    if (clickedCard.length === 2) {
        checkAnswer(); // **event.target를 꼭 파라미터로 줘야 하나? 없을 때도 해보기.
    }
    // **클릭이 곧바로 발생하면 clickedCard에 카드가 또 추가될 수 있는 문제.
});

// 기능1. 게임 시작, 카드 랜덤 배치
function gameStart() {
    let randomNumberList = [];
    
    for (i = 0; ;i++) { // ^^세미콜론 위치 중요.
        let randomNumber = Math.floor(Math.random()*8) +1;
        let cntFilter = randomNumberList.filter((num) => num === randomNumber);
        // **동일 숫자를 2개씩만 뽑기 효율 개선
        if (cntFilter.length < 2) {
            randomNumberList.push(randomNumber);
        }
        if (randomNumberList.length === 16) break;
        console.log(randomNumberList); // **왜 여기서는 15개 나오고
    }
    console.log(randomNumberList); // **여기서는 16개 나옴 왜.

    for (k = 0; k < randomNumberList.length; k++) {
        imgBox[k].firstElementChild.setAttribute('src', 'src/' + 'heojun-' + randomNumberList[k] + '.jpg');
    }
    
    introPage.classList.add("hide");
    gameBoardPage.classList.remove("transparent");
};    

// 기능.2 정답 판정
function checkAnswer() {
    if (clickedCard[0] === clickedCard[1]) { // 두 카드 같으면
        answerCard.push(clickedCard[0],clickedCard[1]); // 정답 맞춘 카드들 관리, 카운트 해서 (제한시간 내) 게임 종료 여부 판단해주는 장치 필요.
        clickedCard = [];
    } else { // 두 카드 다르면
        clickedCard = [];
    }
    console.log(clickedCard);
    console.log(answerCard);

    if (answerCard.length === 16) {
        countAnswer();
    }
};

// 기능3. 게임 종료
function countAnswer() {

};

// 기능5. 그리기
function render() {

};