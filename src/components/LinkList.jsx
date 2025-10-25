import { Link as LinkIcon, Youtube, Github, Globe, Instagram, Twitter } from 'lucide-react';

const links = [
  {
    label: 'Visit My Website',
    href: 'https://example.com',
    icon: Globe,
    color: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Latest YouTube Video',
    href: 'https://youtube.com/',
    icon: Youtube,
    color: 'from-rose-500 to-rose-600',
  },
  {
    label: 'GitHub Projects',
    href: 'https://github.com/',
    icon: Github,
    color: 'from-zinc-700 to-zinc-800',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: Instagram,
    color: 'from-pink-500 to-fuchsia-600',
  },
  {
    label: 'Twitter/X',
    href: 'https://twitter.com/',
    icon: Twitter,
    color: 'from-sky-500 to-sky-600',
  },
  {
    label: 'My Portfolio',
    href: '#',
    icon: LinkIcon,
    color: 'from-emerald-500 to-emerald-600',
  },
];

export default function LinkList() {
  return (
    <ul className="mt-2 w-full space-y-3">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r ${item.color} p-[1px]`}
            >
              <div className="flex w-full items-center justify-between rounded-2xl bg-neutral-950/70 px-4 py-4 backdrop-blur transition group-hover:bg-neutral-950/60">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-xs text-white/70">Open</span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
