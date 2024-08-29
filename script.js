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

// console.log(firstNext);

class Student{
    name = ''
    phoneNumber = ''
    level = ''
    score = 0

}

let arr = [];

// firstNext.addEventListener('submit', function(){
//     console.log("click");
    
// // })
// firstNext.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the form from submitting if needed
//     console.log("Form submitted");
// });

function sub (){
    let student = new Student();
    student.name = fName.value;
    student.phoneNumber = phoneNumber.value;
    student.level = year.value;
    arr.push(student)
    console.log(arr);
    sec1.classList.add('hide');
    sec2.classList.remove('hide');


    
}

function section2 (){
    sec2.classList.add('hide');
    sec3.classList.remove('hide');
}

function section3 (){
    sec3.classList.add('hide');
    sec4.classList.remove('hide');
}

function section4 (){
    sec4.classList.add('hide');
    sec5.classList.remove('hide');
}

function section5 (){
    sec5.classList.add('hide');
    sec6.classList.remove('hide');
}



