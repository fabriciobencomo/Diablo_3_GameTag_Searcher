<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  components: { BaseLoading },
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    /**
     * Obtener los datos de la API
     * Guardarlos en 'profileData'
     */
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
