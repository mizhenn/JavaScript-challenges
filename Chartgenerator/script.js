let chartData = {
    labels: [],
    datasets: [{
        label: '# of Values',
        data: [],
        backgroundColor: [
            'rgba(99, 124, 255, 0.5)',
            'rgba(99, 208, 255, 0.5)',
            'rgba(99, 255, 182, 0.5)',
            'rgba(224, 255, 99, 0.5)',
            'rgba(255, 195, 99, 0.5)',
            'rgba(255, 114, 99, 0.5)'
        ],
        borderColor: [
            'rgba(99, 124, 255, 0.5)',
            'rgba(99, 208, 255, 0.5)',
            'rgba(99, 255, 182, 0.5)',
            'rgba(224, 255, 99, 0.5)',
            'rgba(255, 195, 99, 0.5)',
            'rgba(255, 114, 99, 0.5)'
        ],
        borderWidth: 1
    }]
};

function createChart(type, height = 400){
    const canvasContainer = document.getElementById('canvas-container');
    canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    canvasContainer.style.height = `${height}px`;

    const ctx = document.getElementById('myChart').getContext('2d');
    return new chartData(ctx, {
        type: type,
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: (event, actieElements) =>{
                if(actieElements.lenght > 0){
                    const { datasetIndex, index } = actieElements[0];
                    removedata(datasetIndex, index);
                }
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            }
        }
    });

}

let myChart = createChart('bar'); // Create initial chart with default height = 400

function addData(){
    const labelInput = document.getElementById('labelInput');
    const dataInput = document.getElementById('dataInput');

    
}