import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface TagBadgeProps {
  title: string;
  questionsCount?: number;
  id: number;
  showCount?: boolean;
  otherClasses?: string;
}
const TagBadge = ({
  title,
  questionsCount,
  id,
  showCount,
  otherClasses,
}: TagBadgeProps) => {
  return (
    <Link
      href={`/tags/${id}`}
      className={`${otherClasses} flex gap-2 items-center`}
    >
      <Badge
        className="subtle-medium background-light800_dark300
text-light400_light500 rounded-md border-none px-4 py-2 uppercase"
      >
        {title}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questionsCount}</p>
      )}
    </Link>
  );
};

export default TagBadge;
