let restaurantData = [
    {
        "name": "Tatiana by Kwame Onwuach",
        "phone": "(212) 875-5222",
        "address": "10 Lincoln Center Plaza",
        "photo": "/images/Restaurant1.jpg"
    },
    {
        "name": "Blanca",
        "phone": "(347) 799-2807",
        "address": "4261 Moore Street",
        "photo": "/images/Restaurant2.jpg"
    },
    {
        "name": "Le Bernardin",
        "phone": "(212) 554-1515",
        "address": "155 West 51st Street",
        "photo": "/images/Restaurant3.jpg"
    },
    {
        "name": "Atomix",
        "phone": "N/A",
        "address": "104 East 30th Street",
        "photo": "/images/Restaurant4.jpg"
    },
    {
        "name": "Via Carota",
        "phone": "(212) 255-1962",
        "address": "51 Grove Street",
        "photo": "/images/Restaurant5.jpg"
    },
    {
        "name": "La Piraña Lechonera",
        "phone": "N/A",
        "address": "766 East 152nd Street",
        "photo": "/images/Restaurant6.jpg"
    }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// get list of restaurants
const getRestaurants = () => { 
    return restaurantData;
};

// get restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(r => r.id === parseInt(id));
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    newRestaurant.id = getNextId();
    restaurantData.push(newRestaurant);
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    restaurantData = restaurantData.filter((r) => r.id !== parseInt(id));
};

export { restaurantData, getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };