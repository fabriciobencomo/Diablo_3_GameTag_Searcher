<template>
  <div class="container">
    <HeaderBar/>

    <router-view/>

    <FooterBar/>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar/Index'
import HeaderBar from '@/components/HeaderBar/Index'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
