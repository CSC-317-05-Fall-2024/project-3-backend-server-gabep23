document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.new-restaurant-form form');

    form.addEventListener('submit', handleSubmit);
});

// form submission
async function handleSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target); 
    const newRestaurant = Object.fromEntries(formData.entries()); 

    try {
        const response = await fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRestaurant),
        });

        if (response.ok) {
            window.location.href = '/restaurants';
        } else {
            console.error('Failed to create a new restaurant');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
