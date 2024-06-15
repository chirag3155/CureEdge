import React from "react";
import styles from "./Card.module.css";

const Card = ({
  id,
  frontImage,
  title,
  rating,
  details,
  location,
  price,
  people,
  rooms,
  beds,
  baths,
  description,
}) => {
  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        id={id}
        className={styles.more}
        aria-hidden="true"
      />
      <div className={styles.content}>
        <div
          className={styles.front}
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className={styles.inner}>
            <h2>{title}</h2>
            <div className={styles.rating}>
              {[...Array(5)].map((star, i) => (
                <i
                  key={i}
                  className={`fas ${
                    i < rating ? "fa-star" : "fa-star-half-alt"
                  }`}
                ></i>
              ))}
            </div>
            <label htmlFor={id} className={styles.button} aria-hidden="true">
              Details
            </label>
          </div>
        </div>
        <div
          className={styles.back}
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className={styles.inner}>
            <div className={styles.description}>{description}</div>
            <div className={styles.location}>{location}</div>
            <div className={styles.price}>{price}</div>
            <label
              htmlFor={id}
              className={`${styles.button} ${styles.return}`}
              aria-hidden="true"
            >
              BACK
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
