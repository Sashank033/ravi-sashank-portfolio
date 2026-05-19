import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

type SocialIconType = "linkedin" | "github" | "email" | "phone";

type SocialIconGroupProps = {
  className?: string;
  items?: SocialIconType[];
  variant?: "card" | "icons";
};

const socialLinks: Array<{
  label: string;
  type: SocialIconType;
  href: string;
  icon: typeof Github;
  external: boolean;
  ariaLabel: string;
}> = [
  {
    label: "LinkedIn",
    type: "linkedin",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
    ariaLabel: "LinkedIn profile",
  },
  {
    label: "GitHub",
    type: "github",
    href: profile.github,
    icon: Github,
    external: true,
    ariaLabel: "GitHub profile",
  },
  {
    label: "Email",
    type: "email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
    ariaLabel: "Send email",
  },
  {
    label: "Phone",
    type: "phone",
    href: `tel:${profile.phone.replace(/\D/g, "")}`,
    icon: Phone,
    external: false,
    ariaLabel: "Call phone number",
  },
];

export default function SocialIconGroup({
  className = "",
  items,
  variant = "card",
}: SocialIconGroupProps) {
  const links = items
    ? socialLinks.filter((link) => items.includes(link.type))
    : socialLinks;

  const content = (
    <div
      className={
        variant === "card"
          ? "relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          : "flex items-center gap-3"
      }
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={`footer-social-link footer-social-${link.type} ${variant === "icons" ? "footer-social-link-icon-only" : ""} group`}
            aria-label={link.ariaLabel}
          >
            <span className="footer-social-icon">
              <Icon className="h-4 w-4" />
            </span>
            {variant === "card" && <span className="footer-social-label">{link.label}</span>}
          </a>
        );
      })}
    </div>
  );

  if (variant === "icons") {
    return <div className={className}>{content}</div>;
  }

  return (
    <div
      className={`shine-border-card glass border border-white/[0.07] rounded-2xl px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ${className}`}
    >
      {content}
    </div>
  );
}
