/**
 * We're importing the Fruit object which will be transpiled into an actual import
 * 
 */
import { FruitEnum } from './as-const-enum';

/**
 * This is the trivial use case of importing an object from a file.
 * It's also the case that we want to avoid as importing implies an actual import
 */

console.log(FruitEnum.Apple);

