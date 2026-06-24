'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const contactMethods = [
  {
    title: 'Correo Directo',
    value: 'pedrojosemesaherrera@gmail.com',
    cta: 'Enviar Email',
    href: 'mailto:pedrojosemesaherrera@gmail.com',
    icon: Mail,
  },
  {
    title: 'Conectemos',
    value: 'www.linkedin.com/in/pedro-jose-mesa-herrera-03301933b',
    cta: 'Abrir LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-jos%C3%A9-mesa-herrera-03301933b',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Ver mi c\u00f3digo',
    value: 'github.com/niiep',
    cta: 'Abrir GitHub',
    href: 'https://github.com/niiep',
    icon: GitBranch,
  },
  {
    title: 'Chat directo',
    value: '+34 661 83 21 42',
    cta: 'Abrir WhatsApp',
    href: 'https://wa.me/34661832142',
    icon: MessageCircle,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [formState, setFormState] = useState<FormState>('idle');
  const [feedback, setFeedback] = useState('');

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (formState !== 'idle') {
      setFormState('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasEmptyField = Object.values(formData).some((value) => !value.trim());

    if (hasEmptyField) {
      setFormState('error');
      setFeedback('Completa todos los campos antes de enviar.');
      return;
    }

    if (!emailPattern.test(formData.email)) {
      setFormState('error');
      setFeedback('Introduce un email valido.');
      return;
    }

    setFormState('loading');
    setFeedback('');

    await new Promise((resolve) => setTimeout(resolve, 700));

    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const subject = encodeURIComponent(formData.subject);
    window.location.href = `mailto:pedrojosemesaherrera@gmail.com?subject=${subject}&body=${body}`;

    setFormData(initialForm);
    setFormState('success');
    setFeedback('Mensaje preparado. Se abrira tu cliente de correo para enviarlo.');
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen px-6 py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">
              Trabajemos Juntos
            </span>
          </h2>
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            Si tienes una idea, una oportunidad o un reto tecnico con IA, SaaS o
            desarrollo multiplataforma, me encantaria escucharlo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: '0 18px 45px rgba(167, 139, 250, 0.16)',
                }}
                whileTap={{ scale: 0.98 }}
                className="group flex min-h-64 flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent-violet/30 hover:bg-white/10 md:p-8"
              >
                <div>
                  <Icon className="mb-6 size-8 text-accent-violet transition-colors duration-300 group-hover:text-accent-blue md:size-10" />
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {method.title}
                  </h3>
                  <p className="break-words text-sm leading-relaxed text-gray-400">
                    {method.value}
                  </p>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-violet transition-colors group-hover:text-accent-blue">
                  {method.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field
              id="name"
              label="Nombre"
              value={formData.name}
              onChange={(value) => updateField('name', value)}
              placeholder="Tu nombre"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              placeholder="tu@email.com"
            />
            <Field
              id="subject"
              label="Asunto"
              value={formData.subject}
              onChange={(value) => updateField('subject', value)}
              placeholder="Proyecto, colaboracion o consulta"
              className="md:col-span-2"
            />
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Cuentame que tienes en mente..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-accent-violet focus:ring-4 focus:ring-accent-violet/20"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              aria-live="polite"
              className={`min-h-6 text-sm ${
                formState === 'error'
                  ? 'text-red-300'
                  : formState === 'success'
                    ? 'text-emerald-300'
                    : 'text-gray-400'
              }`}
            >
              {feedback}
            </p>

            <motion.button
              type="submit"
              disabled={formState === 'loading'}
              whileHover={{ scale: formState === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: formState === 'loading' ? 1 : 0.96 }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue px-7 py-3 font-semibold text-white shadow-lg shadow-accent-violet/20 transition-all duration-300 hover:shadow-accent-violet/45 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === 'loading' ? (
                <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              ) : formState === 'success' ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <Send className="size-5 transition-transform group-hover:translate-x-1" />
              )}
              {formState === 'loading' ? 'Enviando...' : 'Enviar'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  className?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-gray-500 focus:border-accent-violet focus:ring-4 focus:ring-accent-violet/20"
      />
    </div>
  );
}
