import { Instagram } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/penguingrowth', label: 'Instagram @penguingrowth' }
]

export default function Footer() {
  return (
    <footer className="bg-penguin-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/25">
          {new Date().getFullYear()} Penguin Growth
        </p>

        <div className="h-[2px] w-16 gradient-rainbow rounded-full" />

        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/30 hover:text-white/70 hover:scale-110 transition-all duration-300"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
