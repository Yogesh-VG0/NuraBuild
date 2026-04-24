export default function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Architectural block/beam monogram — stylized "N" with construction beam */}
      <rect x="4" y="6" width="6" height="28" fill="currentColor" />
      <rect x="30" y="6" width="6" height="28" fill="currentColor" />
      <path d="M10 6L36 34V28L10 6Z" fill="currentColor" opacity="0.85" />
      {/* Bronze accent beam */}
      <rect x="0" y="36" width="40" height="2.5" rx="1" fill="#B88746" />
    </svg>
  );
}
