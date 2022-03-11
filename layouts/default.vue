<template>
  <div>
    <Header />

    <main class="foreground">
      <PageContainer class="container">
        <slot />
      </PageContainer>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'background'
    }
  },
  css: ['~/assets/css/nav']
}
</script>