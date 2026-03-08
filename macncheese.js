elements.macaroni = {
    color: "#f5d061",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    reactions: {
        "water": { elem1: "macaroni", elem2: null, chance: 0.05 },
        "cheese": { elem1: "mac_n_cheese", elem2: null, tempMin: 60 },
    },
    tempHigh: 100,
    stateHigh: "mac_n_cheese",
};

elements.mac_n_cheese = {
    color: "#ffb300",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    temp: 70,
    viscosity: 40,
    reactions: {
        "head": { elem1: null, elem2: "head", chance: 0.2 },
        "body": { elem1: null, elem2: "body", chance: 0.1 },
    },
};
