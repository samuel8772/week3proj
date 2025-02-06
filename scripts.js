
const ctx = document.getElementById('fillLevelChart').getContext('2d');
let fillLevelChart;

function fetchData() {
    // Simulate fetching data from a server
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulated fill levels for 3 bins
            const data = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
            resolve(data);
        }, 1000);
    });
}

async function updateChart() {
    const fillLevels = await fetchData();
    if (fillLevelChart) {
        fillLevelChart.data.datasets[0].data = fillLevels;
        fillLevelChart.update();
    } else {
        fillLevelChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Bin 1', 'Bin 2', 'Bin 3'],
                datasets: [{
                    label: 'Fill Level (%)',
                    data: fillLevels,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {