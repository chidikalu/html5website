var coffeeSales = new Array();
coffeeSales[0] = "Jan, 270";
coffeeSales[1] = "Feb, 170";
coffeeSales[2] = "Mar, 370";
coffeeSales[3] = "Apr, 380";
coffeeSales[4] = "May, 400";
coffeeSales[5] = "Jun, 320";
coffeeSales[6] = "Jul, 230";
coffeeSales[7] = "Aug, 570";
coffeeSales[8] = "Sep, 590";
coffeeSales[9] = "Oct, 3200";
coffeeSales[10] = "Nov, 1170";
coffeeSales[11] = "Dec, 5270";


function createAxis(context, startx, starty, endx, endy) {
    context.beginPath();
    context.moveTo(startx, starty);
    context.lineTo(endx, endy);
    context.closePath();
    context.stroke();
}

function createBar(context, x, y, width, height) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();
    context.stroke();
    context.fill();
}


function drawChart() {
    var canvas = document.getElementById('barChart');

    if (canvas && canvas.getContext) {
        var context = canvas.getContext('2d');
        createBarChart(context, coffeeSales, 30, 20, (canvas.height - 20), 50);
    }
}

createBarChart(context, data, startx, barWidth, chartHeight); {
    context.lineHeight = "1.2";
    var starty = 780;

    createAxis(context, startx, starty, startx, 30); //vertical axis
    createAxis(context, startx, starty, 650, starty); //horizontal axis

    context.lineHeight = "0.0";
    var maxValue = 0;
    for(var i=0; i<data.length; i++) {

        var item = data[i].split(",");
        var itemName = item[0];
        var itemValue = parseInt(item[1]);
        if(parseInt(itemValue) >parseInt(maxValue)) maxValue = itemValue;

        context.fillStyle = "blue";
        createBar(context, 20 +startx + (i * barWidth) + i (i * 30),(chartHeight - itemValue));

        context.textAlign = "left";
        context.fillStyle = "black";
        createBar(context, 20 +startx + (i * barWidth) + i (i * 30),(chartHeight +15));

    }
    

}

    