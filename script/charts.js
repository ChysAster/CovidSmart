////////////////////////////////////
/////////// FOCUS CHARTS ///////////
////////////////////////////////////

function focusChart1() {
    const ctx = document.getElementById('focusChart1');
  
    if (_focusChart1) {
      _focusChart1.destroy();
    }
  
    fetch(URL + `/api/v1/deaths/${translateRegio(selectedRegio)}/date`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let labels = result.data.map((i) => {
          return i.DATE;
        });
  
        let values = result.data.map((i) => {
          return i.DEATHS;
        });
  
        _focusChart1 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderWidth: 1,
                tension: 0.5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'YEAR_WEEK',
              yAxisKey: 'DEATHS_PER_100',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }
  
  function focusChart2() {
    //Grafiek specifiek pagina 2
    const ctx = document.getElementById('focusChart2');
  
    if (_focusChart2) {
      _focusChart2.destroy();
    }
  
    fetch(URL + `/api/v1/vaccinated/${translateRegio(selectedRegio)}/date`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let res = _.valuesIn(_.keyBy(result.data, 'DATE'));
  
        let labels = result.data.map((i) => {
          return i.DATE;
        });
  
        let values = result.data.map((i) => {
          return i.COUNT;
        });
  
        _focusChart2 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderWidth: 1,
                tension: 0.5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'DATE',
              yAxisKey: 'COUNT',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }
  
  function focusChart3() {
    const ctx = document.getElementById('focusChart3');
  
    if (_focusChart3) {
      _focusChart3.destroy();
    }
  
    fetch(URL + `/api/v1/hospitalisation/${translateRegio(selectedRegio)}/date`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let labels = result.data.map((i) => {
          return i.DATE;
        });
  
        let values_in = result.data.map((i) => {
          return i.IN;
        });
        let values_out = result.data.map((i) => {
          return i.OUT;
        });
  
        _focusChart3 = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Hospitalisation in',
                data: values_in,
                backgroundColor: ['#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D'],
                borderColor: ['#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D', '#E15B6D'],
                borderWidth: 1,
                fill: true,
                pointRadius: 1,
                tension: 0.2,
              },
              {
                label: 'Hospitalisation out',
                data: values_out,
                backgroundColor: ['#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9'],
                borderColor: ['#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9', '#BEE1C9'],
                borderWidth: 1,
                fill: true,
                pointRadius: 1,
                tension: 0.2,
              },
            ],
          },
          options: {
            parsing: {
              xAxisKey: 'DATE',
              yAxisKey: 'COUNT',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }
  
  ////////////////////////////////////
  //////////// BASE CHARTS ///////////
  ////////////////////////////////////
  
  function baseChart3() {
    const ctx = document.getElementById('baseChart3');
  
    fetch(URL + '/api/v1/confirmed-cases-by-date', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('CONFIRMED CASES BY DATE');
  
        let labels = result.data.map((i) => {
          return i.TX_DESCR_NL;
        });
  
        let values = result.data.map((i) => {
          return i.CASES;
        });
  
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderWidth: 1,
                tension: 0.5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'DATE',
              yAxisKey: 'COUNT',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }
  
  function baseChart2() {  
    const totalVaccin = document.getElementById('baseChart2');
  
    fetch(URL + '/api/v1/administrated-vaccines-by-date', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let res = _.valuesIn(_.keyBy(result.data, 'DATE'));
  
        new Chart(totalVaccin, {
          type: 'bar',
          data: {
            datasets: [
              {
                label: 'Administered vaccines by date',
                data: res,
                backgroundColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderWidth: 1,
                tension: 0.5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'DATE',
              yAxisKey: 'COUNT',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }
  
  function baseChart1() {
    //grafiek beginpagina 1
    const totalDeaths = document.getElementById('baseChart1');
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  
    fetch(URL + '/api/v1/confirmed-case-hospitalisation', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let res = _.valuesIn(_.keyBy(result.data, 'YEAR_WEEK'));
  
        new Chart(totalDeaths, {
          type: 'line',
          data: {
            datasets: [
              {
                label: 'Hospitalisation per week /100k inhabitants',
                data: res,
                backgroundColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderColor: ['#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922', '#F2A922'],
                borderWidth: 1,
                tension: 0.5,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
            parsing: {
              xAxisKey: 'YEAR_WEEK',
              yAxisKey: 'DEATHS_PER_100',
            },
          },
        });
      })
      .catch((error) => console.log('error', error));
  }