/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator ()
{
    let result;
    if (process.argv[2] !== "plus" || process.argv[2] !== "minus") {
        result = "No operation provided..."
    }
    if ( process.argv[ 3 ] && process.argv[ 4 ] === NaN ) {
       result = "No numbers provided..."
    } 
    return result
}

// Don't change anything below this line.
module.exports = calculator;
