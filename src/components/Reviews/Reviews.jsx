import './Reviews.css';

const reviewData = [
  {
    id: 1,
    name: "Sara",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    text: "Absolutely the best coffee in town. The ambiance is incredibly cozy and the staff is always welcoming. Their Paneer Tikka Sandwich is a must-try!",
    rating: 5
  },
  {
    id: 2,
    name: "Mohan",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    text: "I come here every morning to work. The Wi-Fi is fast, the coffee is exceptional, and the background music is just perfect for focusing.",
    rating: 5
  },
  {
    id: 3,
    name: "Rishi",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    text: "Such a beautiful cafe! The interior design is stunning and highly photogenic. The iced latte was refreshing and beautifully presented.",
    rating: 4
  }
];

const Reviews = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading"> customer's <span>review</span> </h1>

      <div className="box-container">
        {reviewData.map(review => (
          <div className="box" key={review.id}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="quote" />
            <p>{review.text}</p>
            <img src={review.img} className="user" alt={review.name} />
            <h3>{review.name}</h3>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
              {review.rating < 5 && <i className="fas fa-star-half-alt"></i>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
