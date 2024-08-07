let clickedCard = [];
let answerCard = [];
let startCnt = 0;

const introPage = document.querySelector(".intro");
const gameBoardPage = document.querySelector(".game-board");
const startBtn = document.querySelector(".startBtn");
const imgBox = document.querySelectorAll(".img-box"); // 이 클래스 가진 돔 요소들 모두 imgBox라고 부를게.
// const imgBox = document.querySelectorAll() -- 사용가능한지 나중에 체크

// 이벤트 버블링으로 해결할 수도?
// for문은 언제 동작하지? 다 돌려놓는건지, 클릭하면 그 떄 돌리는건지?
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
for (i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener("click", function() {
        // let target = event.target;
        // console.log(event.target.className); // img-box bg1 출력 (에디터가 자동완성 안해줘서 없는 기능인 줄 알았는데 된다;;)
        // console.log(event.target);
        // console.log(event.target.className);
        saveCard(event.target);
    });
    // <div class="img-box bg1"><img src="src/heojun-3.jpg">5</div>
};

function gameStart() {
    introPage.classList.add("hide");
    gameBoardPage.classList.remove("transparent");
}

// 기능1. 카드 랜덤 배치
function setRandom() {
    let randomNumber = Math.floor(Math.random()*(imgBox.length/2)) +1; // 1~4 랜덤
    // 클래스 부착
    imgBox.classList.add(randomNumber)
};

// 기능4. 사용자가 클릭한 카드 관리 (클래스를 배열에 저장해두고, 정오답 여부에 따라 처리)
function saveCard(clickedElement) {
    clickedCard.push(clickedElement);
    console.log(clickedCard);

    clickedElement.classList.add("show"); // 클릭한 카드의 사진 보이게 뒤집어줘
    
    if (clickedCard.length === 2) {
        checkAnswer();
    }
    // 기능은 됐고, UI 변경만 처리해주면 됨.
};

// 기능.2 정답 판정
function checkAnswer() {
    if (clickedCard[0] === clickedCard[1]) {
        answerCard.push(clickedCard[0],clickedCard[1]); // 정답 맞춘 카드들 관리, 카운트 해서 (제한시간 내) 게임 종료 여부 판단해주는 장치 필요.
        clickedCard = []; // 클릭된 배열 초기화
        
    } else {
        // 틀리면 다시 카드 뒤집고 게임 계속 해.
        console.log("ㄴㄴ 2개 다름");
        clickedCard = []; 
        // 클래스 다시 떼라.
    }
    // 2개 클래스 이름 가져와
    // 2개 클래스 이름 같으면, 콘솔 출력해.
    // 이거 하다 보니 사용자 클릭한거 배열로 들고 있어야겠다. 새로운 함수 등장.
    // 클릭카드 배열, 클래스 붙은 것들 초기화
};

// 기능3. 게임 종료
function countAnswer() {

};

// 기능5. 그리기
function render() {

};