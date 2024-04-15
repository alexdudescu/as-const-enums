export const FruitEnum = {
    Apple: 'Apple',
    Banana: 'Banana',
    Pear: 'Pear',
} as const;

export type Fruit = typeof FruitEnum[keyof typeof FruitEnum];