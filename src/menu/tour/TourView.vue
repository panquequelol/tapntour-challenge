<template>
<div>
  <SharedNavegation />
<TourList></TourList>
</div>
</template>
<script>
import TourList from '@/menu/tour/TourList.vue'
import SharedNavegation from '@/components/SharedNavegation.vue';

export default {
  name: 'TourView',
  components: {
  TourList,
  SharedNavegation
  }
}
</script>
