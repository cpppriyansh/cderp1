"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/HomePage/FeedbackandReviews.module.css";

// Extract ReviewCard as a separate component to eliminate duplication
const ReviewCard = ({ review }) => {
  // Simplified star rendering with Array.from
  const renderStars = (rating) => 
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardInner}>
        <div className={styles.imageContainer}>
          <Image
            src={review.image}
            alt={`${review.name}'s photo`}
            width={120}
            height={120}
            className={styles.reviewImage}
          />
          <div className={styles.studentBadge}>Verified Student</div>
          <div className={styles.imageBorder}></div>
        </div>
        <div className={styles.reviewContent}>
          <h4 className={styles.reviewName}>{review.name}</h4>
          <div className={styles.starRating}>
            {renderStars(review.rating)}
          </div>
          <p className={styles.reviewText}>"{review.review}"</p>
        </div>
        <div className={styles.quoteIcon}>"</div>
      </div>
    </div>
  );
};

const FeedbackAndReviews = () => {
  const reviews = [
    {
      name: "Niveath P",
      review:
        "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
      image: "/FeedbacksandReviews/review image 3.avif",
      rating: 5,
    },
    {
      name: "Shweta Udainiya",
      review:
        "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
      image: "/FeedbacksandReviews/review image 1.avif",
      rating: 5,
    },
    {
      name: "Seshu Tamma",
      review:
        "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
      image: "/FeedbacksandReviews/review image 2.avif",
      rating: 4,
    },
    {
      name: "Shreyansh Gupta",
      review:
        "Connecting Dots Advancements offers top SAP training in Mumbai with expert coaches, flexible learning, and strong job support. I completed my SAP SD Course here, highly recommending it for a successful SAP career.",
      image: "/FeedbacksandReviews/review image 4.avif",
      rating: 5,
    },
    {
      name: "Sai Srujan",
      review:
        "I completed the SAP HCM course at Connecting Dots ERP in Mumbai, where expert instructors guided me through SAP complexities with clarity. The comprehensive, well-designed course covered all essential modules.",
      image: "/FeedbacksandReviews/review image 5.avif",
      rating: 5,
    },
    {
      name: "Seshu Tamma",
      review:
        "In my opinion, Connecting Dots is Mumbai's best SAP training center, offering top-notch SAP Aruba courses with a comprehensive curriculum, expert instructors, and excellent placement assistance.",
      image: "/FeedbacksandReviews/review image 2.avif",
      rating: 5,
    },
  ];

  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.style.animationPlayState = isPaused ? "paused" : "running";
    }
  }, [isPaused]);

  // Double the reviews array once for infinite scroll
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className={styles.feedbackSection}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="max-w-3xl text-center">
            <h2 className={styles.sectionTitle}>What Our Students Say</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Hear from our successful students about their learning experience
              with Connecting Dots
            </p>
          </div>
        </div>

        <div className={styles.marqueeWrapper}>
          <div
            className={styles.marquee}
            ref={marqueeRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {doubledReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackAndReviews;
