import { getTranslations } from "next-intl/server";
import { ContactModuleClient } from "./contactSectionClient";
import { ContactHeaderClient } from "./contactHeaderClient";

export async function ContactSection() {
  const t = await getTranslations("Contact");

  const channels = [
    { name: "GitHub", value: "@guibus", iconName: "GithubLogo", href: "https://github.com" },
    { name: "LinkedIn", value: "Guilherme Bustamante", iconName: "LinkedinLogo", href: "https://linkedin.com" },
    { name: "Instagram", value: "@guibus.dev", iconName: "InstagramLogo", href: "https://instagram.com" },
    { name: "Email", value: "contato@guibus.dev", iconName: "EnvelopeSimple", href: "mailto:contato@guibus.dev" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-contact"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] opacity:30 pointer-events-none" />

      <div className=" px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <ContactHeaderClient 
            statusText={t("status")}
            titleTop={t("title_top")}
            titleBottom={t("title_bottom")}
            ctaLabel={t("cta_start")}
            description="Estou sempre aberto a novas oportunidades e parcerias estratégicas. Inicie o protocolo para construirmos algo memorável."
          />

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {channels.map((channel, i) => (
              <ContactModuleClient 
                key={channel.name}
                title={channel.name}
                value={channel.value}
                iconName={channel.iconName}
                href={channel.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
