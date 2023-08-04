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
      ],
    },

    {
      category: "Access Control",
      children: [
        {
          name: "Role Permissions",
          icon: "UserCog",
          href: "/dashboard/role",
        },
        {
          name: "Users",
          icon: "Users",
          href: "/dashboard/users",
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
