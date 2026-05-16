import { useState } from 'react';
import { IconDiscord, IconX, IconLinkedIn } from './icons/Icons';

const communityLinks = [
  {
    name: 'Discord',
    href: '#',
    icon: IconDiscord,
    description: 'Canlı sohbet, beta testleri ve özel etkinlikler.',
    color: 'hover:bg-[#5865F2]/10 hover:border-[#5865F2]/30 hover:text-[#5865F2]',
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: IconX,
    description: 'Duyurular, geliştirme günlükleri ve topluluk.',
    color: 'hover:bg-gray-900/5 hover:border-gray-900/20 dark:hover:bg-white/5 dark:hover:border-white/20',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: IconLinkedIn,
    description: 'İş ortaklıkları, kariyer ve stüdyo haberleri.',
    color: 'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-[#0A66C2]',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-studio-muted dark:bg-studio-night/50">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-studio-ink sm:text-4xl dark:text-white">
            İletişim & Topluluk
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Oyuncular, yayıncılar ve iş ortakları — size bir mesaj uzağız.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-8 shadow-card dark:border-gray-700/50 dark:bg-studio-card/80 dark:shadow-card-dark sm:p-10"
          >
            <div className="space-y-6">
              <FormField
                label="Ad Soyad"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Adınız Soyadınız"
                required
              />
              <FormField
                label="E-posta"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
                required
              />
              <FormField
                label="Mesajınız"
                id="message"
                name="message"
                as="textarea"
                value={form.message}
                onChange={handleChange}
                placeholder="Mesajınızı buraya yazın..."
                required
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-studio-accent px-6 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-studio-accent-hover hover:shadow-lg"
            >
              {submitted ? 'Mesajınız Alındı ✓' : 'Gönder'}
            </button>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-3xl border border-studio-accent/20 bg-studio-accent/5 p-8 dark:border-studio-accent/30 dark:bg-studio-accent/10">
              <h3 className="text-xl font-bold text-studio-ink dark:text-white">
                Topluluğumuza Katılın
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Beta erişimi, özel duyurular ve diğer oyuncularla tanışmak için
                topluluk kanallarımıza göz atın.
              </p>
            </div>

            {communityLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 dark:border-gray-700/50 dark:bg-studio-card/80 ${link.color}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-studio-ink dark:bg-gray-700 dark:text-white">
                  <link.icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-semibold text-studio-ink dark:text-white">
                    {link.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  id,
  name,
  type = 'text',
  as,
  value,
  onChange,
  placeholder,
  required,
  rows,
}) {
  const inputClasses =
    'mt-2 w-full rounded-2xl border border-gray-200 bg-studio-muted px-5 py-3.5 text-studio-ink placeholder-gray-400 transition-all duration-300 focus:border-studio-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-studio-accent/20 dark:border-gray-600 dark:bg-studio-night dark:text-studio-glow dark:placeholder-gray-500 dark:focus:border-studio-accent dark:focus:bg-studio-card';

  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-studio-ink dark:text-gray-300">
        {label}
      </span>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={inputClasses}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
    </label>
  );
}
