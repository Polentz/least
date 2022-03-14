var canvas = document.getElementById('canvas');
var docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;
var docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

canvas.width = docWidth;
canvas.height = docHeight - 50;

var ctx = canvas.getContext('2d');
var trail_colors = ['#b7e3a3', '#d0bbff', '#bbcce8', '#f9f691']
trail_colors = trail_colors.filter(c => c.indexOf("rgba") === -1).map((color) => {
    var total = Number("0x" + color.slice(1))
    var rgb = [];
    var b = total % (16 * 16);
    total -= b;
    var g = total % (16 * 16 * 16 * 16) / (16 * 16);
    total -= g;
    var r = total % (16 * 16 * 16 * 16 * 16 * 16) / (16 * 16 * 16 * 16);
    return [Math.floor(r), Math.floor(g), Math.floor(b)];
})

var colorSteps = [0, 0, 0];
var trail_color = 0;

var trail_thickness = 6 - 4;
var trail_period = 1000;
var colorInterval = trail_period;

var rgb = trail_colors[trail_color];

function calculateColorSteps() {
    var color1 = trail_colors[trail_color % trail_colors.length];
    var color2 = trail_colors[(trail_color + 1) % trail_colors.length];
    for (var i = 0; i < 3; i++) {
        colorSteps[i] = (color2[i] - color1[i]) / colorInterval;
    }
}

var colorCount = 0;
var points = []
// var ctx = canvas.getContext('2d');

function drawLine(p1, p2, width, ctx) {
    ctx.beginPath()
    ctx.lineWidth = width;
    ctx.strokeStyle = rgba();
    ctx.moveTo(p1[0], p1[1])
    var a = p1[0] - p2[0]
    var b = p1[1] - p2[1]
    if (Math.sqrt(a * a + b * b) > 100)
        ctx.moveTo(p2[0], p2[1]);
    ctx.lineTo(p2[0], p2[1])
    ctx.stroke();
    ctx.closePath()
}

function rgba() {
    return `rgb(${Math.floor(rgb[0])}, ${Math.floor(rgb[1])}, ${Math.floor(rgb[2])})`;
}

function drawTrail(e) {
    if (canvas.getContext) {
        ctx.clearRect(0, 0, docWidth, docHeight);

        points.push([e.pageX, e.pageY - 46])
        rgb = rgb.map((r, i) => {
            return (r + colorSteps[i])
        })
        for (var i = 1; i < points.length - 2; i++) {
            drawLine(points[i], points[i + 1], i * (1 / trail_thickness), ctx)
        }
        if (points.length > 50)
            points.shift()
    }
    if (colorCount % colorInterval === 0) {
        calculateColorSteps();

        trail_color = (trail_color + 1) % trail_colors.length;
    }
    colorCount++;
}

window.addEventListener('mousemove', drawTrail, { passive: true });
