import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgURL: string;
  value: number | string;
  title: string;
  alt: string;
  href?: string;
  isAuthor?: boolean;
}
const Metric = ({ imgURL, value, title, alt, href, isAuthor }: MetricProps) => {
  const metricContent = (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      <Image
        src={imgURL}
        alt={alt}
        width={22}
        height={22}
        className={`object-contain ${
          href ? "rounded-full" : ""
        } text-dark400_light700 invert-colors`}
      />

      <p className="flex items-center gap-1">
        {value}

        <span className={`${isAuthor ? "max-sm:hidden" : ""}`}>{title}</span>
      </p>
    </div>
  );

  if (href) {
    return <Link href={href}>{metricContent}</Link>;
  }
  return <div>{metricContent}</div>;
};

export default Metric;
