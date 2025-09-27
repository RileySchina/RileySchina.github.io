console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", showPieChart);
document.addEventListener("DOMContentLoaded", hoverSmiley);


function hoverSmiley(){
       const smiles = document.getElementById('smiles');

        smiles.addEventListener('mouseenter', () => {
            smiles.style.transform = 'scale(4)'; // Increase to 120% on hover
        });

        smiles.addEventListener('mouseleave', () => {
            smiles.style.transform = 'scale(1)'; // Revert to original size on mouse leave
        });
}


function showPieChart(){
    console.log("pie-chart on load");

    //the parts of the chart
    let sliceA={size:59.8, color: 'lightblue'}; //houses with dogs in millions
    let sliceB={size:42.2, color: 'lightgreen'}; // houses with cats in millions
    let sliceC={size:11.9, color: 'lightyellow'}; // houses with other pets in millions

    const values = [sliceA.size, sliceB.size, sliceC.size];

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

        // ctx.fillStyle = index === 0 ? sliceA.color : sliceB.color;
        ctx.fillStyle = index === 0 ? sliceA.color : index === 1 ? sliceB.color : sliceC.color; 
        //operator had to be switched from previous, yes, no to a 3 option of 0, 1, else. Add more index and number to add more options
        ctx.fill();

        startAngle += angle;

    });

    // show legend

    const legend = document.getElementById("pie-chart-legend");

    legend.innerHTML= `
    <div class="legend-item">
        <div class="legend-color" style="background-color:${sliceA.color}"</div>

        <div class="legend-label"> Houses with Dogs: ${sliceA.size} million ~ ${((sliceA.size / total) * 100).toFixed(2)} %</div>
    </div>

    <div class="legend-item">
        <div class="legend-color" style="background-color:${sliceB.color}"</div>

        <div class="legend-label"> Houses with Cats: ${sliceB.size} million ~ ${((sliceB.size / total) * 100).toFixed(2)} %</div>
    </div>

    <div class="legend-item">
        <div class="legend-color" style="background-color:${sliceC.color}"</div>

        <div class="legend-label"> Houses with other pets: ${sliceC.size} million ~ ${((sliceC.size / total) * 100).toFixed(2)} %</div>
    </div>
   ` ;


}


