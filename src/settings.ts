// Global data
type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "Zhuang's Blog",
  description: "Hi, I'm Zhuang, welcome to my blog.",
  lang: "en",
  favicon: "/favicon.svg",
  og: {
    image: "/ogImage.png",
    imageAlt: "Open Graph image for Zhuang's Blog",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
