import React from 'react';

const RestaurantItem = ({ restaurant, onRestaurantSelect, isSelected }) => {
    return (
        <div className="list-item">
            <div className="restaurant-header">
                <h3 className='restaurant-name' onClick={() => onRestaurantSelect(restaurant)}>
                    {restaurant.name}
                </h3>
                <p className="restaurant-rating"><strong>Note : </strong> {restaurant.rating}</p>
            </div>
            {isSelected && (
                <>
                    <div className='vinicity'>
                        <p><strong>Adresse :</strong> {restaurant.vicinity}</p>
                    </div>
                    <div className="reviews">
                        <p><strong>Commentaires :</strong></p>
                        {restaurant.reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <p className='review-item-author'><strong>{review.author_name}</strong></p>
                                <p className="review-item-rating">Note : {review.rating} - <i className="review-item-relative_time_description">{review.relative_time_description}</i></p>
                                <p className='review-item-text'>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};


const ListComponent = ({ data, onRestaurantSelect, selectedResto }) => {
    return (
        <div className="list-container">
            {data.map((restaurant, index) => (
                <RestaurantItem
                    key={index}
                    restaurant={restaurant}
                    onRestaurantSelect={onRestaurantSelect}
                    isSelected={selectedResto === restaurant.name}
                />
            ))}
        </div>
    );
};

export default ListComponent;
