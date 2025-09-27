console.log("script.js loaded");

//listeners to call each function
document.addEventListener("DOMContentLoaded", () => {
    drawPieChart();
    hoverSmiley();
    window.addEventListener('resize', drawPieChart); // Redraw on resize
});


function hoverSmiley(){
       const smiles = document.getElementById('smiles');

        smiles.addEventListener('mouseenter', () => {
            smiles.style.transform = 'scale(4)'; // Increase to 400% on hover
        });

        smiles.addEventListener('mouseleave', () => {
            smiles.style.transform = 'scale(1)'; // Revert to original size on mouse leave
        });
}


function drawPieChart() {
    console.log("Drawing pie chart...");

    const sliceA = { size: 59.8, color: 'lightblue' }; //households with dogs in millions
    const sliceB = { size: 42.2, color: 'lightgreen' }; //households with dogs in millions
    const sliceC = { size: 11.9, color: 'lightyellow' }; //households with dogs in millions

    const values = [sliceA.size, sliceB.size, sliceC.size]; //values stored to then calculate
    const total = values.reduce((acc, val) => acc + val, 0);

    const canvas = document.getElementById("pie-chart");
    const ctx = canvas.getContext("2d");

    // Resize the canvas to match its displayed size
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let startAngle = 0;

    //actual arc drawing
    values.forEach((value, index) => {
        const angle = (value / total) * Math.PI * 2;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);

        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
            startAngle,
            startAngle + angle
        );
        ctx.closePath();

        ctx.fillStyle = index === 0 ? sliceA.color : index === 1 ? sliceB.color : sliceC.color;
        ctx.fill();

        startAngle += angle;
    });

    // Update legend
    const legend = document.getElementById("pie-chart-legend");
    legend.innerHTML = `
        <div class="legend-item">
            <div class="legend-color" style="background-color:${sliceA.color}"></div>
            <div class="legend-label">Houses with Dogs: ${sliceA.size} million ~ ${(sliceA.size / total * 100).toFixed(2)}%</div>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background-color:${sliceB.color}"></div>
            <div class="legend-label">Houses with Cats: ${sliceB.size} million ~ ${(sliceB.size / total * 100).toFixed(2)}%</div>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background-color:${sliceC.color}"></div>
            <div class="legend-label">Houses with Other Pets: ${sliceC.size} million ~ ${(sliceC.size / total * 100).toFixed(2)}%</div>
        </div>
    `;
}



