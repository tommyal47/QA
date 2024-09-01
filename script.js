/* locators */

const firstNext = document.getElementById('f_next');
const fName = document.getElementById('name');
const phoneNumber = document.getElementById('p_number');
const year = document.getElementById('year');
const sec1 = document.getElementById('f_page');
const sec2 = document.getElementById('sec2');
const sec3= document.getElementById('sec3');
const sec4 = document.getElementById('sec4');
const sec5 = document.getElementById('sec5');
const sec6 = document.getElementById('sec6');
const sec7 = document.getElementById('sec7');
const timerElement = document.getElementById('t_min');
const timerElemen = document.getElementById('q_min');
let next = false;
let skip = false;
let currentSection = 2;
let maxSection= 7;

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
    addAndRemove(sec1, sec2)
    startCountdown(1)
    startCountQuestion();
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
    // addAndRemove(sec2, sec3);
    
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
    // addAndRemove(sec3, sec4)
    startCountQuestion();
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
    // addAndRemove(sec4, sec5)
    startCountQuestion();
}

function section5 (){
    next = true;
    const selectedCheckboxes = document.querySelectorAll('.f_o:checked');
    const values = [];
    selectedCheckboxes.forEach((checkbox) => {
        values.push(checkbox.value);
        
    });
    if (values[1] == 'the amber'){
        arr[0].score += 10;
    }
    // addAndRemove(sec5, sec6)
    startCountQuestion();
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
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        
        updateTimerDisplay(minutes, seconds);
    }, 1000);
}

// start count for every question
function startCountQuestion(){
    let countdown = 5;
    const countdownInterval = setInterval(() => {
        if (next){
            next = false;
            clearInterval(countdownInterval);
            transitionToNextSection()
            
        
            // countdown = 10;
            // startCountQuestion(secadd, secremove);
            return;
            }
            if (countdown <= 0) {
                // next = false;
                // console.log("entered");
                
            clearInterval(countdownInterval);
            transitionToNextSection()
            if (currentSection <= maxSection) {
                countdown = 10; // Reset countdown
                startCountQuestion(); // Restart the timer for the next section
                return;
            }
        }
        // if (countdown <= 0) {
        //     // next = false;
        //     clearInterval(countdownInterval);
        //     transitionToNextSection()
        //     if (currentSection <= maxSection) {
        //         countdown = 10; // Reset countdown
        //         startCountQuestion(); // Restart the timer for the next section
        //     }

        //     // countdown = 10;
        //     // startCountQuestion(secadd, secremove);
        //     return;
        // }
        
        
        if (currentSection == 7){
            timerElemen.classList.add('hide');
            return;
        }
        timerElemen.classList.remove('hide');
        countdown--;
        
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        timerElemen.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        // updateTimerDisplay(minutes, seconds);
    },1000);
}
// transition to the next section
function transitionToNextSection (){
    if (currentSection < maxSection){
        let secadd = document.getElementById(`sec${currentSection}`);
        // let secadd = sec2;
        let secremove = document.getElementById(`sec${currentSection + 1}`);
        // let secremove = sec3;
        currentSection++;
        addAndRemove(secadd, secremove);
        

    }else {
        // Logic for when reaching the final section
        timerElemen.classList.add('hide');
        return;
    }
}
