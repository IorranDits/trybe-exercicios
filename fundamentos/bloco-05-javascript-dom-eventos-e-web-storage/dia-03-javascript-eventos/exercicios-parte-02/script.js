function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 01 

 let decemberDaysList = [29, 30];
 for (let index = 2; index <= 32; index +=1) {
  decemberDaysList.push(index - 1);
 }
//console.log(decemberDaysList);

function createDaysOfTheMonth() {
  let daysList = document.getElementById('days');

  for (index = 0; index < decemberDaysList.length; index += 1){
    let day = decemberDaysList[index];
    let liDay = document.createElement('li');
    liDay.innerText = day;
    liDay.className = 'day';
    daysList.appendChild(liDay);

    if (day === 24 || day === 25 || day ===31){
      liDay.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      liDay.classList.add('friday');
    }
  }
  
}

createDaysOfTheMonth();

//exerciico 02

// buttons-container



function botao (buttonName) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  button.id = 'btn-holiday';
   
  button.innerHTML = buttonName;


  buttonContainer.appendChild(button);

}

botao('Feriados');

// exercicio 3 

// function holiday() {
//   let getHolidayButton = document.querySelector('#btn-holiday');
//   let getHolidays = document.querySelectorAll('.holidays');
//   let backgroundColor = 'rgb(238,238,238)';
//   let setNewColor = 'blue';

//   getHolidayButton.addEventListener('click', function(){
//     for (index = 0; index < getHolidays.length; index += 1){
//       if (getHolidays[index].style.backgroundColor === setNewColor){
//           getHolidays[index].style.backgroundColor = backgroundColor;
//       }else {
//         getHolidays[index].style.backgroundColor = setNewColor;
//       }
//     }
//   });
// }

// holiday();

//Gabarito::

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

// Exerciico  04

function botaoSexta (buttonName) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0];
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
   
  fridayButton.innerHTML = buttonName;


  buttonContainer.appendChild(fridayButton);

}

botaoSexta('Sexta-feira');

//exercicio 05

function displayFridays(fridaysArray){
  let getFridayButtom = document.querySelector('#btn-friday');
  let getFridaysDays = document.querySelectorAll('.friday');
  let newFridayText = 'SEXTOU';

  getFridayButtom.addEventListener('click', function(){
    for (index = 0; index < getFridaysDays.length; index +=1){
      if (getFridaysDays[index].innerHTML !== newFridayText){
        getFridaysDays[index].innerHTML = newFridayText;
      }else {
        getFridaysDays[index].innerText = fridaysArray[index];
      }
    }
  });
}

let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

//Exercicio 06

function dayMouseover() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
  
}

dayMouseover();
dayMouseOut();