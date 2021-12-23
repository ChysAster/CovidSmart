// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

  var openDropdown = function(elem) {
    elem.parentNode.parentNode.classList.toggle("dropdown-open");
    if (elem.parentNode.parentNode.classList.contains("dropdown-open")) {
       console.log(elem.parentNode.offsetHeight + elem.parentNode.querySelector(".dropdown-items").offsetHeight); elem.parentNode.style.height=elem.parentNode.offsetHeight+elem.parentNode.querySelector(".dropdown-items").offsetHeight+"px";
    } else {
      if (elem.parentNode.style.removeProperty) {
        elem.parentNode.style.removeProperty('height');
      } else {
          elem.parentNode.style.removeAttribute('height');
      }
    }
  };

  const URL = `http://covid.gpconsulting.be`

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(URL + "/api/v1/status", requestOptions)
  .then(data => {
    return data.json();
  })
  .then(post => {
    naam = post.name;
    uptime = post.uptime;
    version = post.version;
    up  = post.up

    console.log(up)

    
    
    const selector = document.querySelector(".footer")
    selector.innerHTML = `${naam}  &emsp;   Version: ${version} &emsp; Run time: ${uptime}`;
    
    



  });

  

  

  
  const ctx = document.getElementById('myChart');


  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(URL + "/api/v1/confirmed-case-hospitalisation", requestOptions)
      .then(response => response.json())
      .then(result => {        
          
          let res = _.valuesIn(_.keyBy(result.data, "YEAR_WEEK"))
          console.log(res)
  
          new Chart(ctx, {
              type: 'line',
              data: {
                  datasets: [{
                      data: res,
                      backgroundColor: [
                          'rgba(32, 73, 235, 0.2)',
                          'rgba(32, 73, 235, 0.2)',
                          'rgba(32, 73, 235, 0.2)',
                          'rgba(32, 73, 235, 0.2)',
                          'rgba(32, 73, 235, 0.2)',
                          'rgba(32, 73, 235, 0.2)',
                      ],
                      borderColor: [
                          'rgba(32, 72, 235, 1)',
                          'rgba(32, 72, 235, 1)',
                          'rgba(32, 72, 235, 1)',
                          'rgba(32, 72, 235, 1)',
                          'rgba(32, 72, 235, 1)',
                          'rgba(32, 72, 235, 1)',
                      ],
                      borderWidth: 1,
                      tension: 0.5
                  }]
              },
              options: {            
                  parsing: {
                      xAxisKey: 'YEAR_WEEK',
                      yAxisKey: 'DEATHS_PER_100'
                  }
              }
          })
  
      })
      .catch(error => console.log('error', error));


      const ctxx = document.getElementById('myChart2');
  
      fetch(URL + "/api/v1/administrated-vaccines-by-date", requestOptions)
    .then(response => response.json())
    .then(result => {        
        
        let res = _.valuesIn(_.keyBy(result.data, "DATE"))
        console.log(res)

        new Chart(ctxx, {
            type: 'bar',
            data: {
                datasets: [{
                    data: res,
                    backgroundColor: [
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                    ],
                    borderColor: [
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                    ],
                    borderWidth: 1,
                    tension: 0.5
                }]
            },
            options: {            
                parsing: {
                    xAxisKey: 'DATE',
                    yAxisKey: 'COUNT'
                }
            }
        })

    })
    .catch(error => console.log('error', error));

    const ctxxx = document.getElementById('myChart3');
  
      fetch(URL + "/api/v1/administrated-vaccines-by-date", requestOptions)
    .then(response => response.json())
    .then(result => {        
        
        let res = _.valuesIn(_.keyBy(result.data, "DATE"))
        console.log(res)

        new Chart(ctxxx, {
            type: 'bar',
            data: {
                datasets: [{
                    data: res,
                    backgroundColor: [
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                      'rgba(32, 73, 235, 0.2)',
                    ],
                    borderColor: [
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                      'rgba(32, 72, 235, 1)',
                    ],
                    borderWidth: 1,
                    tension: 0.5
                }]
            },
            options: {            
                parsing: {
                    xAxisKey: 'DATE',
                    yAxisKey: 'COUNT'
                }
            }
        })

    })
    .catch(error => console.log('error', error));

  
