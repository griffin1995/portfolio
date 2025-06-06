// utils/faviconManager.ts

export class FaviconManager {
  private static instance: FaviconManager;
  private lightFavicon = "/griffin_dark.png"; // Dark logo for light backgrounds
  private darkFavicon = "/griffin_light.png"; // Light logo for dark backgrounds

  private constructor() {
    this.init();
  }

  public static getInstance(): FaviconManager {
    if (!FaviconManager.instance) {
      FaviconManager.instance = new FaviconManager();
    }
    return FaviconManager.instance;
  }

  private init(): void {
    // Set initial favicon based on current theme
    this.updateFavicon();

    // Listen for theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", () => {
      this.updateFavicon();
    });
  }

  private updateFavicon(): void {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const faviconPath = isDarkMode ? this.darkFavicon : this.lightFavicon;

    // Update main favicon
    this.setFavicon("icon", faviconPath);

    // Update apple touch icon
    this.setFavicon("apple-touch-icon", faviconPath);

    // Update shortcut icon (for older browsers)
    this.setFavicon("shortcut icon", faviconPath);
  }

  private setFavicon(rel: string, href: string): void {
    // Remove existing favicon of this type
    const existingLink = document.querySelector(
      `link[rel="${rel}"]`
    ) as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = href;
    } else {
      // Create new favicon link if it doesn't exist
      const link = document.createElement("link");
      link.rel = rel;
      link.type = "image/png";
      link.href = href;
      document.head.appendChild(link);
    }
  }

  // Public method to manually update favicon (useful for testing)
  public setTheme(isDark: boolean): void {
    const faviconPath = isDark ? this.darkFavicon : this.lightFavicon;
    this.setFavicon("icon", faviconPath);
    this.setFavicon("apple-touch-icon", faviconPath);
    this.setFavicon("shortcut icon", faviconPath);
  }
}

// Auto-initialise when imported
export const faviconManager = FaviconManager.getInstance();
