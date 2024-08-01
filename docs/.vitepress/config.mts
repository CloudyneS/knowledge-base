import { defineConfig } from 'vitepress'

const sidebar = [
  {
    text: 'Home',
    link: '/'
  },
  // {
  //   text: 'Documentation',
  //   link: '/doc-index'
  // },
  {
    text: 'Domains',
    items: [
      { text: 'Change Nameservers', link: '/domains/change-nameservers' },
      { text: 'Transfer Domain', link: '/domains/transfer-domain' },
      { text: 'SMTP Service', link: '/domains/smtp-service' },
    ]
  },
  {
    text: 'Wordpress',
    items: [
      { text: 'Single Sign-on', link: '/websites/wordpress-sso' },
      { text: 'Sending Emails', link: '/websites/sending-emails' },
      // { text: 'Media Settings', link: '/websites/media-settings' },
    ]
  },
  {
    text: 'Keeper Admin',
    items: [
      { text: 'Add Users (SSO)', link: '/keeper/add-user-sso' }
    ]
  }
  // {
  //   text: 'Emails',
  //   items: [
  //     { text: 'A', link: '/emails/prepare-migration/google-create-admin-account' },
  //   ]
  // },
  // {
  //   text: 'Microsoft 365',
  //   items: [
  //     { text: 'A', link: '/emails/change-nameservers' },
  //     { text: 'B', link: '/emails/transfer-domain' }
  //   ]
  // },
  // {
  //   text: 'Templates',
  //   items: [
  //     { text: 'Markdown Examples', link: '/markdown-examples' },
  //     { text: 'Runtime API Examples', link: '/api-examples' }
  //   ]
  // }
];

const svSidebar = [
  {
    text: 'Start',
    link: '/sv/'
  },
  // {
  //   text: 'Dokumentation',
  //   link: '/sv/doc-index'
  // },
  {
    text: 'Domäner',
    items: [
      { text: 'Ändra Namnservrar', link: '/sv/domains/change-nameservers' },
      { text: 'Flytta Domän', link: '/sv/domains/transfer-domain' }
    ]
  },
  // {
  //   text: 'Webbplatser',
  //   items: [
  //     { text: 'A', link: '/websites/change-nameservers' },
  //     { text: 'B', link: '/websites/transfer-domain' }
  //   ]
  // },
  // {
  //   text: 'E-post',
  //   items: [
  //     { text: 'A', link: '/emails/prepare-migration/google-create-admin-account' },
  //   ]
  // },
  // {
  //   text: 'Microsoft 365',
  //   items: [
  //     { text: 'A', link: '/emails/change-nameservers' },
  //     { text: 'B', link: '/emails/transfer-domain' }
  //   ]
  // }
];



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Knowledge Base",
  description: "Find your answers",

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    sv: {
      label: 'Svenska',
      lang: 'sv',
      themeConfig: {
        sidebar: svSidebar
      }
    }
  },

  themeConfig: {
    logo: '/logo-dark.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudynes' }
    ]
  }
})
