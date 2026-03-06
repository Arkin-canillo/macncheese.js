elements.macaroni = {
    color: "#f5d142",
    behavior: behaviors.POWDER, // Acts like a powder (falls down)
    category: "food",
    state: "solid",
    tempHigh: 100,
    stateHigh: "macaroni", // Remains macaroni unless reacted
};

elements.mac_n_cheese = {
    color: "#ffb300",
    behavior: behaviors.STURDYPOWDER, // Slightly thicker movement
    category: "food",
    state: "solid",
};

// Define the multi-step reaction
elements.macaroni.reactions = {
    "water": {
        "with1": "cheese",
        "next": "mac_n_cheese_unheated" // Intermediate state
    }
};

// Heat requirement: Transforms to Mac n Cheese when temperature rises
elements.mac_n_cheese_unheated = {
    color: "#e3c57d",
    behavior: behaviors.POWDER,
    category: "food",
    hidden: true,
    tempHigh: 60, // Transformation temperature
    stateHigh: "mac_n_cheese" 
};
