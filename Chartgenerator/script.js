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
    
}