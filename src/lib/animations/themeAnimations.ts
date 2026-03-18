export type AnimationVariant = "circle-blur" | "fade" | "diagonal";
export type AnimationStart = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

export function createAnimation() {
  const css = `
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation: none;
      mix-blend-mode: normal;
      display: block;
      filter: none;
    }

    ::view-transition-old(root) {
      z-index: 1;
    }

    ::view-transition-new(root) {
      z-index: 9999;
      animation: 800ms cubic-bezier(0.85, 0, 0.15, 1) both diagonal-wipe;
      outline: 100vh solid transparent;
    }

    @keyframes diagonal-wipe {
      0% {
        clip-path: inset(0 100% 0 0);
      }
      100% {
        clip-path: inset(0 0 0 0);
      }
    }

    html {
      background-color: transparent !important;
    }
  `;

  return { css, name: "diagonal-wipe" };
}
