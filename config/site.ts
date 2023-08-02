export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "BIR - CMS",
  description: "BIR CMS",
  sideNav: [
    {
      category: "Global",
      children: [
        {
          name: "Dashboard",
          icon: "LayoutDashboard",
          href: "/dashboard",
        },
        {
          name: "Transaction",
          icon: "ArrowLeftRight",
          href: "/transaction",
        },
      ],
    },
    {
      category: "Subscribers",
      children: [
        {
          name: "Agencies",
          icon: "Users2",
          href: "dashboard/agencies",
        },
      ],
    },
    {
      category: "Settings",
      children: [
        {
          name: "Access Control",
          icon: "Laptop2",
          href: "/access-control",
        },
        {
          name: "Settings",
          icon: "Cog",
          href: "/settings",
        },
      ],
    },
  ],

  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
