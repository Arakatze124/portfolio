interface Grocerie {
    name: string;
    isLiquid: boolean;
    kcalPer100g: number;
    pricePerKg: number;
    proteinPer100g: number;
    fatPer100g: number;
    carbsPer100g: number;
    imageUrl: string;
    id?: string;
}

interface Recipe {
    name: string;
    ingredients: Ingredient[];
    instructions?: string;
    imageUrl: string;
    id?: string;
}

interface Ingredient {
    grocerie: Grocerie | string;
    amount: number;
}

export const groceries: Grocerie[] = [
    {
        name: "Vollmilch 3.5%",
        isLiquid: true,
        kcalPer100g: 63,
        pricePerKg: 1.2,
        proteinPer100g: 3.3,
        fatPer100g: 3.5,
        carbsPer100g: 4.8,
        imageUrl: ""
    },
    {
        name: "High Protein Knuspermüsli Schoko-Kürbiskern",
        isLiquid: false,
        kcalPer100g: 437,
        pricePerKg: 10.0,
        proteinPer100g: 22,
        fatPer100g: 13.5,
        carbsPer100g: 54.7,
        imageUrl: ""
    },
    {
        name: "Hähnchenbrustfilet",
        isLiquid: false,
        kcalPer100g: 110,
        pricePerKg: 10.0,
        proteinPer100g: 23,
        fatPer100g: 1.2,
        carbsPer100g: 0,
        imageUrl: ""
    },
    {
        name: "Basmatis Reis",
        isLiquid: false,
        kcalPer100g: 360,
        pricePerKg: 2.0,
        proteinPer100g: 7.0,
        fatPer100g: 0.6,
        carbsPer100g: 77.7,
        imageUrl: ""
    },
    {
        name: "Erbsen",
        isLiquid: false,
        kcalPer100g: 59,
        pricePerKg: 2.0,
        proteinPer100g: 4.4,
        fatPer100g: 0.2,
        carbsPer100g: 10.5,
        imageUrl: ""
    },
    {
        name: "Zwiebel",
        isLiquid: false,
        kcalPer100g: 40,
        pricePerKg: 2.0,
        proteinPer100g: 1.1,
        fatPer100g: 0.1,
        carbsPer100g: 9.3,
        imageUrl: ""
    },
]

export const recepies: Recipe[] = [
    {
        name: "Hähnchenbrustfilet mit Reis",
        ingredients: [
            {
                grocerie: "Hähnchenbrustfilet",
                amount: 500,
            },
            {
                grocerie: "Basmatis Reis",
                amount: 250,
            },
            {
                grocerie: "Erbsen",
                amount: 150,
            },
            {
                grocerie: "Zwiebel",
                amount: 150,
            }
        ],
        imageUrl: ""
    },
    {
        name: "High Protein Knuspermüsli Schoko-Kürbiskern",
        ingredients: [
            {
                grocerie: "High Protein Knuspermüsli Schoko-Kürbiskern",
                amount: 100,
            },
            {
                grocerie: "Milch",
                amount: 300,
            }
        ],
        imageUrl: ""
    }
]