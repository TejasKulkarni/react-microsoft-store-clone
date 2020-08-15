import React from 'react';

const Carbon = () => {
    return (
        <>
            <section className="carbon dark">
                <div className="content">
                    <h2>Commiting To Carbon Negative</h2>
                    <p>Microsoft will be carbon negative by 2030 and by 2050 we will remove
            all carbon the company has emitted since it was founded in 1975</p>
                    <a href="#" class="btn">
                        Learn More <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </section>
            
            <section class="follow">
                <p>Follow Microsoft</p>
                <a href="https://facebook.com">
                    <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com">
                    <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
                </a>
                <a href="https://linkedin.com">
                    <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
                </a>
            </section>
        </>
    );
};

export default Carbon;