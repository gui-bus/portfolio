import { getTranslations } from "next-intl/server";
import { ContactModuleClient } from "./contactSectionClient";
import { ContactHeaderClient } from "./contactHeaderClient";

export async function ContactSection() {
  const t = await getTranslations("Contact");

  const channels = [
    { name: "GitHub", value: "@gui-bus", iconName: "GithubLogo", href: "https://github.com/gui-bus" },
    { name: "LinkedIn", value: "Guilherme Bustamante", iconName: "LinkedinLogo", href: "https://linkedin.com/in/guibus" },
    { name: "Instagram", value: "@guibus.dev", iconName: "InstagramLogo", href: "https://instagram.com/guibus.dev" },
    { name: "Email", value: "contato@guibus.dev", iconName: "EnvelopeSimple", href: "mailto:contato@guibus.dev" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-background transition-colors duration-500 overflow-hidden grid-contact"
    >
      <div className="max-w-350 mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ContactHeaderClient 
            statusText={t("status")}
            titleTop={t("title_top")}
            titleBottom={t("title_bottom")}
            ctaLabel={t("cta_start")}
            description={t("description")}
          />

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {channels.map((channel) => (
              <ContactModuleClient 
                key={channel.name}
                title={channel.name}
                value={channel.value}
                iconName={channel.iconName}
                href={channel.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
