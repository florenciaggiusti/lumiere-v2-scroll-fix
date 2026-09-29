import Link from "next/link";

export default function PrimaryCTA({ href = "/reservar", children, light = false }) {
  return (
    <Link className={light ? "primaryCta primaryCtaLight" : "primaryCta"} href={href}>
      <span>{children}</span>
      <span className="ctaArrow">↗</span>
    </Link>
  );
}
