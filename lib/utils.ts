import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTime(createdAt: Date): string {
  const now = new Date();
  const timeDifferenceInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifferenceInSeconds < minute) {
    const seconds = timeDifferenceInSeconds;
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (timeDifferenceInSeconds < hour) {
    const minutes = Math.floor(timeDifferenceInSeconds / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifferenceInSeconds < day) {
    const hours = Math.floor(timeDifferenceInSeconds / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifferenceInSeconds < month) {
    const days = Math.floor(timeDifferenceInSeconds / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifferenceInSeconds < year) {
    const months = Math.floor(timeDifferenceInSeconds / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}

export function getNumberInExtension(number: number | string): number | string {
  if (typeof number === "string") {
    number = parseFloat(number);
  }

  if (isNaN(number) || !isFinite(number)) {
    return number; // return as-is for non-numeric values
  }

  const suffixes = ["", "k", "M", "B", "T"];

  let suffixIndex = 0;
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  const roundedNumber = Math.round(number * 10) / 10;

  return `${roundedNumber}${suffixes[suffixIndex]}`;
}
