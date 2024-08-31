/* locators */

const firstNext = document.getElementById('f_next');
const fName = document.getElementById('name');
const phoneNumber = document.getElementById('p_number');
const year = document.getElementById('year');
const sec1 = document.getElementById('f_page');
const sec2 = document.getElementById('s_page');
const sec3= document.getElementById('t_page');
const sec4 = document.getElementById('fo_page');
const sec5 = document.getElementById('fi_page');
const sec6 = document.getElementById('se_page');
const sec7 = document.getElementById('end_page');
const timerElement = document.getElementById('t_min');
const timerElemen = document.getElementById('q_min');
let next = false;
let skip = false;

class Student{
    name = ''
    phoneNumber = ''
    level = ''
    score = 0
    wrong = 0
    right = 0

}

let arr = [];

// add and remove hide calss
function addAndRemove(hid, disp){
    hid.classList.add('hide');
    disp.classList.remove('hide');
}

var section = [sec1, sec2, sec3, sec4, sec5, sec6]
function hideAll(section){
    section.forEach(function(s){
        s.classList.add('hide');
    })
}
function sub (){
    let student = new Student();
    student.name = fName.value;
    student.phoneNumber = phoneNumber.value;
    student.level = year.value;
    arr.push(student)
    console.log(arr);
    addAndRemove(sec1, sec2)
    startCountdown(1)
    startCountQuestion(sec2, sec3);
}

function section2 (){
    next = true;
    const selectedCheckboxes = document.querySelectorAll('.f_o:checked');
    const values = [];
    selectedCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values[0] == 1890){
        arr[0].score += 10;
    }
    startCountQuestion(sec3, sec4);
    addAndRemove(sec2, sec3);
    
}

function section3 (){
    next = true;
    const selectedCheckboxes = document.querySelectorAll('.s_o:checked');
    const values = [];
    selectedCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values[0] == 'electeristy'){
        arr[0].score += 10;
    }
    addAndRemove(sec3, sec4)
    startCountQuestion(sec4, sec5);
}

function section4 (){
    next = true;
    const selectedCheckboxes = document.querySelectorAll('.t_o:checked');
    const values = [];
    selectedCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values[0] == 1980){
        arr[0].score += 10;
    }
    addAndRemove(sec4, sec5)
    startCountQuestion(sec5, sec6);
}

function section5 (){
    next = true;
    const selectedCheckboxes = document.querySelectorAll('.f_o:checked');
    const values = [];
    selectedCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
        console.log(checkbox.value);
        
    });
    if (values[1] == 'the amber'){
        arr[0].score += 10;
    }
    console.log(values);
    addAndRemove(sec5, sec6)
    startCountQuestion(sec6, sec7);
    // timerElemen.classList.add('hide')
}

function endPage (){
    addAndRemove(sec6, sec7)
    // timerElemen.classList.add('hide');
    sec7.innerHTML = `Your score is ${arr[0].score} `
}


// timer function 
// Function to update the timer display
function updateTimerDisplay(minutes, seconds) {
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start the countdown
function startCountdown(x) {
    let countdownTime = x * 60;
    const countdownInterval = setInterval(() => {
        if (countdownTime <= 0 || !sec7.classList.contains('hide')) {
            clearInterval(countdownInterval);
            hideAll(section);
            sec7.classList.remove('hide');
            sec7.innerHTML = `Your score is ${arr[0].score} `
            if (countdownTime <= 0){
                alert('Time is up!');
            }
            timerElement.classList.add('hide');
            return;
        }
        timerElement.classList.remove('hide');
        countdownTime--;
        console.log(sec7.classList.contains('hide'));
        

        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        
        updateTimerDisplay(minutes, seconds);
    }, 1000);
}

// start count for every question
function startCountQuestion(secadd, secremove){
    let countdown = 10;
    const countdownInterval = setInterval(() => {
        if (countdown <= 1 || next) {
            next = false;
            clearInterval(countdownInterval);
            addAndRemove(secadd, secremove);
            // countdown = 10;
            // startCountQuestion(secadd, secremove);
            return;
        }
        if (secremove == 'sec7'){
            timerElemen.classList.add('hide');
        }
        timerElemen.classList.remove('hide');
        countdown--;
        
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        timerElemen.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        // updateTimerDisplay(minutes, seconds);
    },1000);
}
