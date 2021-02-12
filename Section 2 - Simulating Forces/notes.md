# Section 2: Simulating Forces
## Implementation Details
So, for this implementation, we're using integration, rather than derivation, to model our physics, because we have relatively large time gaps. This basically means that we're using vectors to model the acceleration, velocity, position, and forces acting upon a simulated object. These are calculated at each frame, rather than trying to find them at various infintesimally small points in time.

This sketch continues working with the mover from Section 1, and rather than split into various files for lessons, I'm going to be just making the changes needed to the `mover.js` and `sketch.js` files.

## 