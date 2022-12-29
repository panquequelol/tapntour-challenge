<template>
  <div>
    <SharedNavegation />
    <GuideList @open="popupOpen"></GuideList>
  </div>
</template>

<script>
import GuideList from '@/menu/guide/GuideList.vue'
import SharedNavegation from '@/components/SharedNavegation.vue';

export default {
  name: 'GuideView',
  components: {
    GuideList,
    SharedNavegation
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
