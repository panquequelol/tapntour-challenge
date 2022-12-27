<template>
<div>
<TourList @open="popupOpen" ></TourList>
</div>
</template>
<script>
import TourList from '@/menu/tour/TourList.vue'

export default {
  name: 'HomeView',
  components: {
  TourList
  },
  emits: ['open'],
  data() {
    return {
    }
  },
  created: function () {
  this.$nextTick(function () {
    this.$store.dispatch("fetchTours")
  })
  },
  methods: {
  }
}
</script>
