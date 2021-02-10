// Creating a graph of perlin noise in TWO!!! dimensions (tecnically 3! 3rd is time tho)
var inc = 0.01;
var zoff = 1000;
function setup() {
    createCanvas(500,500);
    // CanvasGradient.parent("perlin")
    noiseDetail(3);
}
  
function draw() {
    var yoff = 0;

    loadPixels();

    for (var x = 0; x < width; x++) {
        var xoff = 0;

        for (var y = 0; y < height; y++ ) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff, zoff) * 255;
            if (r > 255 / 2) {
                r = 255;
            }
            else {
                r = 0;
            }
            pixels[index] = r >> 1;
            pixels[index+1] = r / 4;
            pixels[index+2] = r;
            pixels[index+3] = 255;

            xoff += inc;
        }

        yoff += inc;
    }
    zoff += inc * 4;
    updatePixels();
}