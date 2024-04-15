/**
 * Here We're importing only the type.
 * (the type keyword can be omitted as there's no clash between the type and the object name) but i added here to make it more clear
 * 
 * This is the preferred way of importing as it doesn't imply an actual import in the transpiled file
 */
import { type Fruit } from './as-const-enum';

function logFruit(fruit: Fruit) {
    console.log(fruit);
}

logFruit('Banana');