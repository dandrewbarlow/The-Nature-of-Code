/*
 * Andrew Barlow
 * The Nature of Code
 * Section 9 - Genetic Algorithms 🧬
 * 
 * STEPS:
 * 1. Setup
 *   - Create a random population of N elements
 * 2. Draw
 *   - Calculate fitness for N elements
 *      - for this implementation, calculate the amount of characters that match the target phrase
 *   - Reproduction/Selection
 *     - for each element in population:
 *       - pick 2 "parents" (use fitness as probability of selection)
 *     - make a new element
 *       - crossover: take half of the genetic information from one, and take
 *         half of the genetic information of the other, and combine them to
 *         create a new element
 *       - mutation: introduces additional variation to population. Helpful if
 *         the initial population doesn't contain much variation
 *     - Add the new child to the population
*/

// PARAMETERS //////////////////////////////////////////////////

// targetPhrase: the "correct" output; used to judge fitness
let targetPhrase = 'to be or not to be that is the question';

// n: amount of elements in the population
let n = 10;

// GLOBAL VARS //////////////////////////////////////////////////

// population: collection of elements
let population;

// charset: set of characters in problem space
const charset = "abcdefghijklmnopqrstuvwxyz ";

// CLASSES //////////////////////////////////////////////////
/**
 * @param  {number} length - length of genes
 * @param  {string} charset - characters used in genes
 */
class DNA {
    constructor(targetPhrase, charset) {
        this.targetPhrase = targetPhrase;
        this.length = this.targetPhrase.length;
        this.charset = charset;

        this.genes = this.randomPhrase();
        this.fitness = () => this.getFitness;
    }

    // randomLetter() returns a randomly selected character from charset
    randomLetter() {
        let letter = this.charset.charAt(random(this.charset.length));
        return letter;
    }

    randomPhrase() {
        let randomPhrase = '';

        for (let j=0; j < this.length; j++)
        {
            randomPhrase += this.randomLetter();
        }

        return randomPhrase;
    }

    /**
     * fitness(phrase) finds how closely a phrase matches the targetPhrase. Returns a value between 0 & 1.
     */
    getFitness() {
        let fitness = 0.0;
        for (let i = 0; i < this.length; i++) {
            if (this.genes[i] === this.targetPhrase[i]) {
                fitness++;
            }
        }

        fitness = fitness / phrase.length;
        return fitness;
    }
}

/**
 * Population - Class to handle the population of elements
 * @param  {number} n - amount of elements
 * @param  {number} length - length of each element
 * @param  {string} charset - characters in problem space
 */
class Population {
    constructor(n, charset, targetPhrase) {
        this.n = n;
        this.charset = charset;
        this.targetPhrase = targetPhrase;
        this.length = targetPhrase.length;

        this.population = this.populate();
    }

    // populate() - initializes population
    populate() {
        let population = [];
        for (let i = 0; i < this.n; i++)
        {
            population.push(new DNA(this.targetPhrase, this.charset));
        }
        return population;
    }

    selection() {
    }


}
// HELPER FUNCTIONS //////////////////////////////////////////////////


// P5 FUNCTIONS //////////////////////////////////////////////////

// init
function setup() {

    // Create Population
    population = new Population(n, charset, targetPhrase);
}

// main loop
function draw() {
    // TODO selection
    population.selection();

    // TODO reproduction
}