"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Common/Marquee.module.css";

// Constants
const TARGET_DAYS = [5, 10, 15, 20, 25, 30];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Simplified ordinal suffix
const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th";
  return ["th", "st", "nd", "rd"][day % 10] || "th";
};

// Simplified date formatter
const formatDate = (date) => {
  const day = date.getDate();
  return `${day}${getOrdinalSuffix(day)} ${MONTH_NAMES[date.getMonth()]}`;
};

// Simplified next target date calculation
const getNextTargetDate = () => {
  const today = new Date();
  const currentDay = today.getDate();
  const nextDay = TARGET_DAYS.find(day => day > currentDay);
  
  if (nextDay) {
    return new Date(today.getFullYear(), today.getMonth(), nextDay);
  }
  
  // Next month, 5th day
  return new Date(today.getFullYear(), today.getMonth() + 1, 5);
};

const Marquee = () => {
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    // Calculate milliseconds until next midnight
    const getMillisecondsUntilMidnight = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      return tomorrow - now;
    };

    // Update at midnight
    const scheduleNextUpdate = () => {
      const msUntilMidnight = getMillisecondsUntilMidnight();
      return setTimeout(() => {
        setForceUpdate(prev => prev + 1);
        scheduleNextUpdate(); // Schedule next midnight update
      }, msUntilMidnight);
    };

    const timeoutId = scheduleNextUpdate();
    return () => clearTimeout(timeoutId);
  }, [forceUpdate]);

  const displayDate = formatDate(getNextTargetDate());

  return (
    <div className={styles.mainContainerMarquee}>
      <div className={styles.mainContainerMarqueeTrack}>
        <div className={styles.mainContainerMarqueeItems}>
          <span className={styles.mainContainerMarqueeItem}>
            SAP FICO Batch Starting Soon!
          </span>
          <span className={styles.mainContainerMarqueeItem}>
            Data Science A1 batch starting from {displayDate}!
          </span>
        </div>

        <div className={styles.mainContainerMarqueeItems} aria-hidden="true">
          <span className={styles.mainContainerMarqueeItem}>
            Get exciting benefits by registering before {displayDate}!
          </span>
          <span className={styles.mainContainerMarqueeItem}>
            SAP HANA batch commencing on {displayDate}!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
