import { getExternalLinkAriaLabel } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function ExternalLink({ href, children, className = "", title }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={title ? getExternalLinkAriaLabel(title) : undefined}
    >
      {children}
    </a>
  );
}
