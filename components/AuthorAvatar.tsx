function authorInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

function paletteClass(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = name.charCodeAt(i) + ((h << 5) - h);
  }
  const n = Math.abs(h) % 3;
  if (n === 0) return "bg-gradient-to-br from-brand to-brand-dark";
  if (n === 1) return "bg-gradient-to-br from-brand-light to-brand";
  return "bg-gradient-to-br from-accent to-accent-hover";
}

type Props = {
  name: string;
  className?: string;
};

/** Initials placeholder — avoids misleading stock “headshots” for named authors. */
export function AuthorAvatar({ name, className = "" }: Props) {
  const initials = authorInitials(name);
  return (
    <div
      className={`flex shrink-0 items-center justify-center font-bold text-white shadow-inner ${paletteClass(name)} ${className}`}
      role="img"
      aria-label={name}
    >
      <span className="select-none">{initials}</span>
    </div>
  );
}
