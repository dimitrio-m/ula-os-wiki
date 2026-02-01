export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate',
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Docs Template',
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/dimitrio-m/ula-os-wiki',
      'target': '_blank',
      'aria-label': 'GitHub',
    }],
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/dimitrio-m/ula-os-wiki',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub',
    }],
  },
  toc: {
    bottom: {
      title: 'Comunidad',
      edit: 'https://github.com/dimitrio-m/ula-os-wiki/edit/main/content',
      links: [{
        icon: 'i-lucide-book-open',
        label: 'Wiki',
        to: 'https://github.com/dimitrio-m/ula-os-wiki',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-github',
        label: 'Clings',
        to: 'https://github.com/dimitrio-m/ula-os-clings',
        target: '_blank',
      }],
    },
  },
})
