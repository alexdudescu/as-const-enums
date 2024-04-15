/**
 * Here we're importing both the type and the object.
 * 
 */

import {
    Fruit,
    FruitEnum,
} from './as-const-enum';

// You can also have this if you really need to but importing either the type or the object is enough
const fruit: Fruit = FruitEnum.Pear;

console.log(fruit);
