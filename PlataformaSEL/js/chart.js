    const ctx = document.getElementById('miGrafico').getContext('2d');
    const miGrafico = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Gastos en Millones Bs',
          data: [14, 16, 18, 22, 24],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: ''
          }
        }
      }
    });

        const ctx2 = document.getElementById('miGrafico2').getContext('2d');
    const miGrafico2 = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Ingresos por Recaudació',
          data: [14, 16, 18, 22, 24],
          backgroundColor: [
            '#ff6f61',
            '#6b5b95',
            '#88b04b',
            '#f7cac9',
            '#92a8d1'
          ],
          borderWidth: 1,

          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: ''
          }
        }
      }
    });

        const ctx3 = document.getElementById('miGrafico3').getContext('2d');
    const miGrafico3 = new Chart(ctx3, {
      type: 'pie',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: ' ',
          data: [14, 16, 18, 22, 24],
        backgroundColor: [
            '#ff6f61',
            '#6b5b95',
            '#88b04b',
            '#f7cac9',
            '#92a8d1'
          ],
          borderWidth: 1,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Balance presupuestario'
          }
        }
      }
    });