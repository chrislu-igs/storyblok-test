export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'SsZGtl275DKfn7hFkdsNggtt',
        apiOptions: {
          region: 'us' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
