# Vectors
I'm personally already familiar with vectors, so I'm going to be pretty fast and loose here, but as always the coding excersizes will be fun nonetheless, plus it covers the p5 vector class.

## What is a Vector?
"I have both magnitude and direction" - Vector

That's it. That's a vector.

## Vector Math
### p5 Vector Methods
There are a lot at the [p5.js reference page for vectors](https://p5js.org/reference/#/p5.Vector)

### Vector Addition
Tip to tail! Add the components of the vectors.
    (3, 4)
   +(2,-1)
   =(5, 3)

p5 has both a *method*, `vector.add(anotherVector)`, and a *static function*, `p5.Vector.add(vector1, vector2)`

### Files
* `basic-vectors.js` - playing around with the p5 vector type
* `random-vectors.js` - learning the proper way to create random vectors
* `normalize.js` - learning p5's normalize function, as well as some other vector operations
* `mover.js` - class definition file for the section project, a ball that moves randomly using vectors to calculate movement
* `sketch.js` - the project file

