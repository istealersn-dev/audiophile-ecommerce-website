import { Button as ButtonProps } from "@/app/lib/types";
import Link from "next/link";
import Image from "next/image";

import arrowRight from "@/public/icon-arrow-right.svg";

import styles from "./Button.module.scss";

export const Button = ({ ...ButtonProps }: ButtonProps) => {
  
  const btnVariant = () => {
    switch (ButtonProps.variant) {
      case "Primary":
        return `${styles.primary}`;
      case "Outline":
        return `${styles.outline}`;
      case "Link":
        return `${styles.link}`;
      default:
        return `${styles.primary}`;
    }
  }

  return (
    <div
      className={btnVariant()}
    >
      <Link href={ButtonProps.link} className="href">
        {ButtonProps.label}
      </Link>
      {ButtonProps.variant === "Link" && (
        <Image src={arrowRight} alt="Right arrow" />
      )}
    </div>
  );
};
