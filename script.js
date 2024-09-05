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
scoreEl = document.getElementById('s_score');
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


//validation function

function validateForm() {
    let name = fName.value;
    let phone = phoneNumber.value;
    let yearLevel = year.value;
    const nameError = document.getElementById('name_error')
    const phoneError = document.getElementById('phone_error')
    const selectError = document.getElementById('select_error')
        if (name == "") {
            nameError.textContent = 'Name must be filled out'
            nameError.classList.remove('hide')
            return false;
        } else{
            nameError.classList.add('hide')
        }
    
        if (!/^[0-9]{11}$/.test(phone)) {
            phoneError.textContent = 'Phone number must be 11 digits'
            phoneError.classList.remove('hide')
            return false;
        }else{
            phoneError.classList.add('hide')
        }
    
        if (yearLevel == "") {
            selectError.textContent = 'Year must be filled out'
            selectError.classList.remove('hide')
            return false;
        }
        else {
            selectError.classList.add('hide');
            return true;
        }
    
}

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
    if (validateForm()){
        let student = new Student();
            student.name = fName.value;
            student.phoneNumber = phoneNumber.value;
            student.level = year.value;
            arr.push(student)
            addAndRemove(sec1, sec2)
            startCountdown(5)
            startCountQuestion();
    }else {
        validateForm();
    }
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
    startCountQuestion();
}

function endPage (){
    addAndRemove(sec6, sec7)
    scoreEl.innerHTML = `Your score is ${arr[0].score} `
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
            scoreEl.innerHTML = `Your score is ${arr[0].score} `
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
    let countdown = 60;
    const countdownInterval = setInterval(() => {
        if (next){
            next = false;
            clearInterval(countdownInterval);
            transitionToNextSection()
            return;
            }
            if (countdown <= 0) {
            clearInterval(countdownInterval);
            transitionToNextSection()
            if (currentSection <= maxSection) {
                countdown = 60; // Reset countdown
                startCountQuestion(); // Restart the timer for the next section
                return;
            }
        }
        
        if (!sec7.classList.contains('hide')){
            clearInterval(countdownInterval);
            return;
        } else {
            countdown--;
        }
        
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        
        const section = `s${currentSection}`;
        const countEl = document.getElementById(`s${currentSection}`);
        countEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },1000);
}

// transition to the next section
function transitionToNextSection (){
    if (currentSection < maxSection){
        let secadd = document.getElementById(`sec${currentSection}`);
        let secremove = document.getElementById(`sec${currentSection + 1}`);
        currentSection++;
        addAndRemove(secadd, secremove);
    }else {
        timerElemen.classList.add('hide');
        return;
    }
}