//Algemene URL
const URL = `http://covid.gpconsulting.be`;

// Base request options
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

// charts
let _focusChart1;
let _focusChart2;
let _focusChart3;

let _baseChart1;
let _baseChart2;
let _baseChart3;

// Dropdown
var openDropdown = function (elem) {
  elem.parentNode.parentNode.classList.toggle('dropdown-open');
  if (elem.parentNode.parentNode.classList.contains('dropdown-open')) {
    console.log(elem.parentNode.offsetHeight + elem.parentNode.querySelector('.dropdown-items').offsetHeight);
    elem.parentNode.style.height = elem.parentNode.offsetHeight + elem.parentNode.querySelector('.dropdown-items').offsetHeight + 'px';
  } else {
    if (elem.parentNode.style.removeProperty) {
      elem.parentNode.style.removeProperty('height');
    } else {
      elem.parentNode.style.removeAttribute('height');
    }
  }
};

let selectedRegio = undefined;

//Scherm over beginscherm
$(document).ready(function () {
  $('.dropdown-regio-item-brussels').click(() => {
    selectedRegio = 'Brussel';
  });

  $('.dropdown-regio-item-flanders').click(() => {
    selectedRegio = 'Vlaanderen';
  });

  $('.dropdown-regio-item-wallonia').click(() => {
    selectedRegio = 'Wallonie';
  });

  //open popup
  $('.dropdown-regio-item').click(function () {
    toggleContainer()
    document.querySelector('.overlay-title').innerHTML = selectedRegio;
    focusChart1();
    focusChart2();
    focusChart3();
    $('#overlay_form').fadeIn(1000);
    positionPopup();
  });

  //close popup
  $('#close').click(function () {
    console.log('gesloten');
    $('#overlay_form').fadeOut(500);
  });

  baseChart1();
  baseChart2();
  baseChart3();

  //footer info
  fetch(URL + '/api/v1/status', requestOptions)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      naam = post.name;
      uptime = post.uptime;
      version = post.version;
      up = post.up;

      console.log(up);

      const selector = document.querySelector('.footer');
      selector.innerHTML = `${naam}  &emsp;   Version: ${version} &emsp; Run time: ${uptime}`;
    });

  //Totaal gevacinneerd
  fetch(URL + '/api/v1/total/vaccinated', requestOptions)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      data = post.data;

      console.log(data);

      const selector = document.querySelector('.grid1');
      selector.innerHTML = `<div class="grid1">
  Total Vacinated: <br> <div class="getalvacin"> ${data}  </div>
</div>`;
    });

  //Totaal aantal doden
  fetch(URL + '/api/v1/total/deaths', requestOptions)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      data = post.data;

      console.log(data);

      const selector = document.querySelector('.grid2');
      selector.innerHTML = `<div class="grid2">
    Total Deaths: <br> <div class="getalvacin"> ${data}  </div>
  </div>`;
    });

  //Totaal aantal ziekenhuisopnames
  fetch(URL + '/api/v1/total/hospitalisation', requestOptions)
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      data = post.data;

      console.log(data);

      const selector = document.querySelector('.grid3');
      selector.innerHTML = `<div class="grid3">
  Total Hospitalizations: <br> <div class="getalvacin"> ${data}  </div>
</div>`;
    });

  const targetDiv = document.getElementById('grafiekenLijn1');
  const btn = document.querySelector('.dropdown-regio-item');
  btn.onclick = function () {
    if (targetDiv.style.display !== 'none') {
      targetDiv.style.display = 'none';
    } else {
      targetDiv.style.display = 'block';
    }
  };

  const btnclose = document.getElementById('close');
  btnclose.onclick = function () {
    toggleContainer()
    if (targetDiv.style.display == 'none') {
      targetDiv.style.display = 'grid';
    }
  };
});

