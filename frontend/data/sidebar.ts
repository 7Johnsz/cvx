// This is your sidebar data structure
// You can also load this from a JSON file or API endpoint

export const sidebarData = {
  logo: {
    text: "CVx",
    icon: "FileSymlink",
  },
  sections: [
    {
      title: "INICIO",
      items: [
        {
          title: "Home",
          icon: "Home",
          href: "/dashboard",
        },
        {
          title: "Criar Currículo",
          icon: "FileUser",
          href: "/dashboard/resume",
        },
      ],
    },
    {
      title: "WALLET",
      items: [
        {
          title: "Portfolio",
          icon: "CreditCard",
          href: "/portfolio",
        },
        {
          title: "Transactions",
          icon: "ArrowRightLeft",
          href: "/transactions",
        },
        {
          title: "Active Stacking",
          icon: "Wallet",
          href: "#",
          children: [
            {
              title: "Ethereum",
              icon: "CircleDollarSign",
              href: "/stacking/ethereum",
              active: true,
              color: "bg-[#627eea]",
            },
            {
              title: "Bitcoin",
              icon: "Bitcoin",
              href: "/stacking/bitcoin",
              active: true,
              color: "bg-[#f7931a]",
            },
            {
              title: "Bytecoin",
              icon: "CircleDollarSign",
              href: "/stacking/bytecoin",
              active: true,
              color: "bg-[#d90cff]",
            },
            {
              title: "Digibyte",
              icon: "CircleDollarSign",
              href: "/stacking/digibyte",
              active: true,
              color: "bg-[#0033ad]",
            },
            {
              title: "Litecoin",
              icon: "CircleDollarSign",
              href: "/stacking/litecoin",
              active: true,
              color: "bg-[#345d9d]",
            },
          ],
        },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          title: "Preferences",
          icon: "Settings",
          href: "/preferences",
        },
        {
          title: "API Settings",
          icon: "Cpu",
          href: "/api-settings",
        },
      ],
    },
  ],
}
