document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const restaurantId = event.target.dataset.id; 

            try {
                const response = await fetch(`/api/restaurants/${restaurantId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    // Reload the page to re-render the restaurant list
                    window.location.reload();
                } else {
                    console.error('Failed to delete restaurant');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});