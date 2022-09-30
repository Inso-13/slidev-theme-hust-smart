import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      light: await loadTheme(require.resolve('theme-vitesse/themes/vitesse-light.json')),
    },
  }
})
