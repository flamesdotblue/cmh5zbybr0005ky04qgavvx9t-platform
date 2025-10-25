import { Github, Instagram, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

export default function ProfileCard() {
  const socials = [
    { href: 'https://github.com/', label: 'GitHub', icon: Github },
    { href: 'https://instagram.com/', label: 'Instagram', icon: Instagram },
    { href: 'https://twitter.com/', label: 'Twitter/X', icon: Twitter },
    { href: 'https://linkedin.com/', label: 'LinkedIn', icon: Linkedin },
    { href: 'mailto:hello@example.com', label: 'Email', icon: Mail },
    { href: 'https://example.com', label: 'Website', icon: Globe },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <img
        src="https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=512&auto=format&fit=crop"
        alt="avatar"
        className="h-24 w-24 rounded-full border border-white/20 object-cover shadow-lg"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold">Your Name</h2>
        <p className="mt-1 text-sm text-white/70">Creator • Developer • Designer</p>
      </div>
      <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              <Icon className="h-4 w-4 opacity-80 transition group-hover:opacity-100" />
              <span>{s.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
