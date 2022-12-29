<template>
<div>
<GuideList @open="popupOpen" ></GuideList>
</div>
</template>
<script>
import GuideList from '@/menu/guide/GuideList.vue'

export default {
  name: 'GuideView',
  components: {
    GuideList
},
  emits: ['open'],
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
