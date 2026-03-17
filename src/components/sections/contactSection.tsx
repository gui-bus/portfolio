import { getTranslations } from "next-intl/server";
import { ContactModuleClient } from "./contactSectionClient";
import { ContactHeaderClient } from "./contactHeaderClient";

export async function ContactSection() {
  const t = await getTranslations("Contact");

  const channels = [
    { name: "GitHub", value: "@guibus", iconName: "GithubLogo", href: "https://github.com/guibus" },
    { name: "LinkedIn", value: "Guilherme Bustamante", iconName: "LinkedinLogo", href: "https://linkedin.com/in/guibus" },
    { name: "Instagram", value: "@guibus.dev", iconName: "InstagramLogo", href: "https://instagram.com/guibus.dev" },
    { name: "Email", value: "contato@guibus.dev", iconName: "EnvelopeSimple", href: "mailto:contato@guibus.dev" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-contact"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 pointer-events-none" />

      {/* Cinematic Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ContactHeaderClient 
            statusText={t("status")}
            titleTop={t("title_top")}
            titleBottom={t("title_bottom")}
            ctaLabel={t("cta_start")}
            description={t("description")}
          />

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
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

        {/* Decorative Side Label */}
        <div className="hidden xl:block absolute top-0 -right-4 h-full pt-32 pointer-events-none">
          <div className="sticky top-32 rotate-90 origin-top-right">
            <span className="text-[9px] font-mono text-muted-foreground/20 uppercase tracking-[1.5em] font-black whitespace-nowrap">
              {t("form_tag")} — INITIATE_PROTOCOL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
