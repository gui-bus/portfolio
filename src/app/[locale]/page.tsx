import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/common/languageSwitcher";
import { ThemeToggle } from "@/components/common/themeToggle";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("Index");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary/20 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15] dark:opacity-[0.08]">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-primary/40 blur-[120px] animate-pulse delay-700" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <header className="relative z-10 flex h-24 items-center justify-between px-6 sm:px-16 lg:px-24">
        <div className="flex items-center space-x-6">
          <div className="relative h-10 w-32 sm:h-12 sm:w-36 overflow-visible">
            <Image
              src="/logos/logo/black_logo.png"
              alt="Logo"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/logos/logo/white_logo.png"
              alt="Logo"
              fill
              className="hidden object-contain dark:block"
              priority
            />
          </div>
          <div className="hidden h-8 w-px bg-border/50 sm:block" />
          <span className="hidden text-xs font-black tracking-[0.2em] uppercase text-muted-foreground/80 sm:inline-block">
            {t("subtitle")}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-192px)] flex-col items-center justify-center px-6 py-20 text-center sm:px-16 lg:px-24">
        <div className="max-w-6xl w-full flex flex-col items-center space-y-12 sm:space-y-16">
          <div className="inline-flex items-center space-x-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-2 text-xs font-black uppercase tracking-[0.15em] backdrop-blur-md sm:text-sm animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            <span className="text-primary">{t("backSoon")}</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl font-black leading-[0.85] tracking-tighter sm:text-9xl md:text-[11rem] xl:text-[13rem] drop-shadow-sm uppercase">
              {t("title")}
            </h1>

            <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed sm:text-2xl font-light tracking-tight">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8">
            <a
              href="https://github.com/gui-bus"
              className="group flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-all duration-300"
              target="_blank"
            >
              <GithubLogoIcon
                size={32}
                weight="fill"
                className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
              <span className="text-sm font-black uppercase tracking-widest">
                {t("social.github")}
              </span>
              <ArrowUpRightIcon
                size={14}
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gui-bus/"
              className="group flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-all duration-300"
              target="_blank"
            >
              <LinkedinLogoIcon
                size={32}
                weight="fill"
                className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
              <span className="text-sm font-black uppercase tracking-widest">
                {t("social.linkedin")}
              </span>
              <ArrowUpRightIcon
                size={14}
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>
            <a
              href="mailto:contato@guibus.dev"
              className="group flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-all duration-300"
              target="_blank"
            >
              <EnvelopeIcon
                size={32}
                weight="fill"
                className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              />
              <span className="text-sm font-black uppercase tracking-widest">
                {t("social.email")}
              </span>
              <ArrowUpRightIcon
                size={14}
                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
