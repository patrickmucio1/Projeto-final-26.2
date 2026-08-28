type IconProps = { className?: string };

export function PersonIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="7" r="3.2"/><path d="M5.5 20v-2.1A5.8 5.8 0 0 1 11.3 12h1.4a5.8 5.8 0 0 1 5.8 5.9V20" strokeLinecap="round"/></svg>;
}

export function BoxIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m4.5 7.2 7.5-4 7.5 4v9.5l-7.5 4-7.5-4z"/><path d="m4.8 7.5 7.2 4 7.2-4M12 11.5v9"/></svg>;
}

export function GearIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.7 7.7 0 0 0 .1-3l2-1.5-2-3.4-2.5 1a8.5 8.5 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.6A8.5 8.5 0 0 0 7 6.6l-2.5-1-2 3.4 2 1.5a7.7 7.7 0 0 0 .1 3l-2.1 1.6 2 3.4 2.6-1a8.1 8.1 0 0 0 2.5 1.4l.4 2.6h4l.4-2.6a8.1 8.1 0 0 0 2.5-1.4l2.6 1 2-3.4z" strokeLinejoin="round"/></svg>;
}

export function BellIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 16.5h12l-1.2-1.8V10a4.8 4.8 0 0 0-9.6 0v4.7z"/><path d="M10 19a2.2 2.2 0 0 0 4 0"/></svg>;
}

export function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 3 19 6v5.6c0 4.2-2.6 7.5-7 9.4-4.4-1.9-7-5.2-7-9.4V6z"/></svg>;
}

export function DownloadIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg>;
}

export function EyeIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2.8 12s3.2-5 9.2-5 9.2 5 9.2 5-3.2 5-9.2 5-9.2-5-9.2-5Z"/><circle cx="12" cy="12" r="2.3"/></svg>;
}

export function StarOutlineIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>;
}

export function PencilIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m4 20 4.2-1 10.9-10.9a2.1 2.1 0 0 0-3-3L5.2 16z"/><path d="m14.7 6.5 2.8 2.8"/></svg>;
}

export function CalendarIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M8 3v5M16 3v5M4 9.5h16"/></svg>;
}

export function HeartOutlineIcon({ className = "h-5 w-5" }: IconProps) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M20.6 5.8a5.2 5.2 0 0 0-7.4 0L12 7l-1.2-1.2a5.2 5.2 0 0 0-7.4 7.4L12 21l8.6-7.8a5.2 5.2 0 0 0 0-7.4Z"/></svg>;
}
