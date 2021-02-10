# Perlin Noise

### Two important p5 functions to know for this project:
* `random(_, _);`
* `noise(_);`

Perlin noise was created by Ken Perlin, for Tron in the 80's. It was originally developed to procedurally generate texture for 3d objects in early computer graphics. He won a technical achievment oscar for it. The `noise` function gives you Perlin noise values. The `random` function will purely random numbers. The difference is that the perlin noise gives "smooth" random numbers. Meaning that when generating a new random number, it will be related to the number generated before.

When graphed side by side, Perlin noise over time looks like a smooth, if random, line. The purely random line will go all over the place.

## Perlin Noise Algorithm
Perlin noise is calculated by essentially picking random numbers over a series of time (referred to as octaves), and then halving both the time interval and maximum range of values, and adding all of these values together. 

Perlin later refined this into the "Simplex noise" algorithm, which is patented, but has an open-source implementation, "OpenSimplex."

Simplex Noise fixes directional artifacts being created by using symplectic geometry.

## Files
* `perlin-ball-movement.js` - making a circle move randomly with perlin noise
* `perlin-noise-1D.js` - graphing perlin noise over time in one dimension

## Further Reading
* [Perlin Noise Wikipedia](https://en.wikipedia.org/wiki/Perlin_noise)
* [Archived page with good information about perlin noise](https://web.archive.org/web/20160530124230/http://freespace.virgin.net/hugo.elias/models/m_perlin.htm)
* [Gradient Noise](https://en.wikipedia.org/wiki/Gradient_noise)
* [Simplex Noise](https://en.wikipedia.org/wiki/Simplex_noise)
* [Symplectic Geometry](https://en.wikipedia.org/wiki/Symplectic_geometry)
* [Stefan Gustavson, a computer graphics researcher](http://staffwww.itn.liu.se/~stegu/)
* [Simplex noise demystified](http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf)
* [OpenSimplexNoise.java by KdotJPG](https://gist.github.com/KdotJPG/b1270127455a94ac5d19)
* [Etienne Jacob](https://necessary-disorder.tumblr.com/)