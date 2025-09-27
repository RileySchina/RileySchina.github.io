console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", showPieChart);


function showPieChart(){
    console.log("pie-chart on load");

    //the parts of the chart
    let sliceA={size:250, color: 'blue'};
    let sliceB={size:750, color: 'green'};

    const values = [sliceA.size, sliceB.size];

    const total = values.reduce((acc, val) => acc + val, 0);

    let startAngle = 0;

    //values of the pie chart

    const canvas = document.getElementById("pie-chart");

    const ctx =canvas.getContext("2d");

    //Calculate the angles

    values.forEach((value, index)=>{
        const angle=(value/total) * Math.PI * 2;

        //Draw Slices

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

        //color the slices

        ctx.fillStyle = index === 0 ? sliceA.color : sliceB.color;
        ctx.fill();

        startAngle += angle;

    });

    // show legend

    const legend = document.getElementById("pie-chart-legend");

    legend.innerHTML= `
    <div class="legend-item">
        <div class="legend-color" style="background-color:${sliceA.color}"</div>

        <div class="legend-label"> Total Pets: $${sliceA.size} - ${((sliceA.size / total) * 100).toFixed(2)} %</div>
    </div>

    <div class="legend-item">
        <div class="legend-color" style="background-color:${sliceB.color}"</div>

        <div class="legend-label"> Total Pets: $${sliceB.size} - ${((sliceB.size / total) * 100).toFixed(2)} %</div>
    </div>
   ` ;


}


