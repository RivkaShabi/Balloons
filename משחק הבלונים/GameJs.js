

//������ ��� 1
var TheSpeedOfTheBalloons = 1;
//div ��� ���� �������
const y = document.querySelector("#y");

var a = document.createElement("div");
document.body.appendChild(a);

const btnNewGame = document.getElementsByClassName('newGame');
//btnNewGame.addEventListener("click", clickBalon);
//���� �60 ����� ����
const h1 = document.querySelector('h5');
var timerEndPlay, timer, movet;
//��� ���� �� ���
const arr1 = document.querySelectorAll("input");
for (let i = 0; i < arr1.length; i++)
    arr1[i].addEventListener('click', checkLavel)


//������� ������ ���� �������
function checkLavel() {

    if (arr1[0].checked == true)
        TheSpeedOfTheBalloons = 1;
    else
        TheSpeedOfTheBalloons = 3;


}
//������ ��
function refresh() {

    location.reload();
}


//function changeNum() {
//    if (parseInt(h1.innerText) - 1 == 0) {

//        if (cnt > 30) {
//            h1.innerText = "���� ������� ����� ���:" + cnt;
//        }
//        else {
            
//            //���� ����� ���� �����
//            var gameOver = document.createElement("IMG");
//            gameOver.setAttribute("src", "images/3820356.png");
//            gameOver.setAttribute("width", "704");
//            gameOver.setAttribute("height", "558");
//            gameOver.setAttribute("alt", "The Pulpit Rock");
//            document.getElementById("s").appendChild(gameOver);
//        }
//        //����� ��������
//        clearInterval(timerEndPlay);
//        clearInterval(timer);
//        clearInterval(movet);

//    }
//    //���� ������ <10 ����� ���
//    else if (parseInt(h1.innerText) - 1 == 10)
//        h1.style.color = 'red';
//    //����� ���� �������
//    h1.innerText = parseInt(h1.innerText) - 1;


//}

function changeNum() {
    if (parseInt(h1.innerText) - 1 <= 0) {
        clearInterval(timerEndPlay);
        clearInterval(timer);
        clearInterval(movet);
        if (cnt > 20) {
           var winn= document.getElementById("win");
            //var winner = document.createElement("h1");
            winn.style.visibility = "visible";
            capaim.play();

        }
        else {
            var gameOver = document.createElement("IMG");
            gameOver.setAttribute("src", "images/3820356.png");
            gameOver.setAttribute("width", "704");
            gameOver.setAttribute("height", "558");
            //gameOver.setAttribute("position", "absolute");
            gameOver.style.marginRight = "390px";
            //gameOver.style.position = "absolute";
            gameOver.setAttribute("alt", "The Pulpit Rock");
            document.getElementById("s").appendChild(gameOver)
        }
     

    }
    else if (parseInt(h1.innerText) - 1 == 10) {
        h1.style.color = 'red';
        h1.innerText = parseInt(h1.innerText) - 1;
    }
    else
        h1.innerText = parseInt(h1.innerText) - 1;


}
//����� �����
const div1 = document.getElementById("div1");
const img = document.getElementById("drag1");
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    startTimer();

    tinerOfAllGame();

}
//����� ����� ���� ����� �����
function tinerOfAllGame() {

    h1.innerText = "60";
    timerEndPlay = setInterval(changeNum, 1000);
}
//���� ������� ������ ����
var arraybalonim = [];
document.getElementById("n").style.fontSize = "50px";
var x = document.getElementById("myAudio");
var babamBlackBaalon = document.getElementById("babam");
//const btnStart = document.getElementById('play');
//����� �����! ������ ���� ������
function startTimer() {
    div1.style.border = "hidden";
    img.style.visibility = "hidden";
    y.style.display = "block";
    document.getElementById("n").innerText = 0;
    //document.getElementById("n").style.color =#daf6ff;
    //����� �������
    //createrow();
    //��� ��� ������
    timer = setInterval(createrow, 2000);

}
//���� ������ �� ������ ������ �����
var arr = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"];
//�� ��� ����� ������ ������ ������� ����� �������
//����� ��� ����� �������
//����� ����
//���� �������

//����� ����
function createElementBaalom() {
    var length = random(20, document.body.offsetWidth - 300);
    //var size = random(50, 150);
    //b1.style.width = size;
    var b1 = document.createElement("img");
    b1.src = arr[Math.floor(Math.random() * 5)];
    //���� ������� �� ������
    b1.style.width = Math.floor((Math.random() * 100) + 70) + "px";
    b1.classList.add("balon");

    //b1.style.padding = Math.floor((Math.random() * 200) + 70) + "px";
    b1.style.left = length + "px";
    //b1.style.transition = "transform " + 850 + "ms linear";
    //����� ������ ���� ���� ��� ��� ���� ���� ������
    b1.style.bottom = "-400px";
    //��� ����� �� �����
    b1.addEventListener("click", clickBalon);

    a.appendChild(b1);
    arraybalonim.push(b1);

}


function createrow() {
    var list = a;
    if (list.childNodes.length > 60) {

        for (let y = 0; y < 6; y++) {
            list.removeChild(list.childNodes[y]);
        }


    }

    var p = 4;
    for (var i = 0; i < p; i++) {
        createElementBaalom();
    }
    if (arraybalonim.length == p) {
        movet = setInterval(function () {
            for (var j = 0; j < arraybalonim.length; j++) {
                //����� ����� ��� ��� ����� ������
                if (TheSpeedOfTheBalloons == 1) {
                    var e = parseInt(arraybalonim[j].style.bottom) + 1;
                    arraybalonim[j].style.bottom = e + "px";
                }
                else {
                    var e = parseInt(arraybalonim[j].style.bottom) + 4;
                    arraybalonim[j].style.bottom = e + "px";
                }
            }
        }, 10);



    }



}






//����� ������
var cnt = 0;
//����� ����
function clickBalon(e) {
    if (!e.target.hidden) {
        //�� �� ���� ��� �����
        if (parseInt(h1.innerText) - 1 > 0) {
            //����� �����
            e.target.hidden = true;
            //����� �� ���� ����
            if (e.currentTarget.attributes.src.nodeValue == arr[4]) {
                cnt--;

                //����� ����� ���� ����

                babamBlackBaalon.currentTime = 0;
                babamBlackBaalon.play();

                //
                //����� ���� ������
                document.getElementById("n").style.fontSize = "100px";
                setTimeout(function () { document.getElementById("n").style.fontSize = "50px"; }, 300);
            }
            else
            //����� ������
            {
                cnt++;
                //����� ������ ���� ����
                //����� ����� ���� �����
                x.currentTime = 0;
                x.play();
            }
            document.getElementById("n").innerText = cnt;
            parent.document.getElementById("n").innerText = cnt;

        }
    }
}
//������� ��� ������ ���� ����� �����
function random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}
