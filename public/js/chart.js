document.addEventListener('DOMContentLoaded', function () {
    const data = {
      intensidade: [100, 250, 400, 250, 300, 350],
      quantidade: {
        total: 166,
        contaminadas: 33,
        saudaveis: 133
      }
    };

    const letterColor = '#ffffff'
    const fontes = 'Montserrat,sans-serif'
    const eixo = "#ffffff"

    document.getElementById('total').textContent = `${data.quantidade.total}`;
  
    const ctxIntensidade = document.getElementById('intensidadeChart').getContext('2d');
    new Chart(ctxIntensidade, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Intensidade da Antracnose',
          data: data.intensidade,
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
                display: false 
              },
            ticks: {
                color: letterColor,
                font: {
                    fontes                  
                } 
              },
              border: {
                color: eixo 
              }
          },

          y: {
            grid: {
                display: false 
              },
              ticks: {
                color: letterColor,
                font: {
                    fontes                  
                }  
              },
              border: {
                color: eixo 
              },
            beginAtZero: true
          }
        },
        plugins: {
            legend: {
              display: false // Remove a legenda
            }
          }
        
      }
    })
  
    const ctxQuantidade = document.getElementById('quantidadeChart').getContext('2d')
    new Chart(ctxQuantidade, {
      type: 'bar',
      data: {
        labels: ['Contaminadas', 'Saudáveis'],
        datasets: [{
          label: 'Quantidade de Pupunheiras',
          data: [data.quantidade.contaminadas, data.quantidade.saudaveis],
          backgroundColor: [
            'rgba(211, 241, 207, 1)',
            'rgba(154, 231, 145, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false 
                  },
                ticks: {
                    color: letterColor ,
                    font: {
                        fontes                  
                    } 
                  },
                  border: {
                    color: eixo 
                  }
              },
    
              y: {
                grid: {
                    display: false 
                  },
                  ticks: {
                    color: letterColor,
                    font: {
                        fontes                  
                    }  
                  },
                  border: {
                    color: eixo 
                  },
                beginAtZero: true
              }
            },
            plugins: {
                legend: {
                  display: false // Remove a legenda
                }
              }
        }
    })
})