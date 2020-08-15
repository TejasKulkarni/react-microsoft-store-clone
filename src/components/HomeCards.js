import React from 'react';

const HomeCards = ({ cardData }) => {
    return (
        <section class="home-cards">
            {
                cardData.map(card => {
                    return (
                        <div>
                            <img src={card.iconUrl} alt="cards" />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <a href="#">{card.linkText} <i class="fas fa-chevron-right"></i></a>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default HomeCards;