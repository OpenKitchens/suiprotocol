import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "水Protocol",
  DESCRIPTION: "部屋で俺、革命犯。アナーキー・イン・ザ・1k",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "アートワーク",
  DESCRIPTION: "もやしくんが作ったなんか",
}

// Blog Page
export const DIARY: Page = {
  TITLE: "日記",
  DESCRIPTION: "もやしくんの情けない日常をお届け",
}

// Projects Page 
export const BANER: Page = {
  TITLE: "バナー同盟",
  DESCRIPTION: "懐かしのバナー同盟を",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "artwork", 
    HREF: "/artwork", 
  },
  { 
    TEXT: "diary", 
    HREF: "/diary", 
  },
  { 
    TEXT: "baner", 
    HREF: "/baner", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "alternadenki@gmail.com",
    HREF: "mailto:alternadenki@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "OpenKitchens",
    HREF: "https://github.com/OpenKitchens"
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "moyasi",
    HREF: "https://x.com/OpenKitchen_nil",
  },
]

