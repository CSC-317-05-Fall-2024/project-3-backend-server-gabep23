import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { restaurantData, getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from './data/restaurants.js';
import apiRouter from './routes/api.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

// Serve static files 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__firname, 'public', 'index.html')); 
});

// Route to render the attractions page (if you created attractions.ejs)
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// Route to render the restaurants page
app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurants: getRestaurants() });
});

// Route to render the new restaurant form
app.get('/newRestaurants', (req, res) => {
    res.render('newRestaurants');
});

app.post('/newRestaurants', (req, res) => {
    const { name, phone, address, photo } = req.body;
    restaurantData.push({ name, phone, address, photo });
    res.redirect('/restaurants');
});

// API Routes
app.get('/api/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

app.get('/api/restaurants/:id', (req, res) => {
    const restaurant = getRestaurant(req.params.id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ error: 'Restaurant not found' });
    }
});

app.post('/api/restaurants', (req, res) => {
    const newRestaurant = req.body;
    createRestaurant(newRestaurant);
    res.status(201).json(newRestaurant);
});

app.delete('/api/restaurants/:id', (req, res) => {
    const id = req.params.id;
    deleteRestaurant(id);
    res.status(204).end();
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
