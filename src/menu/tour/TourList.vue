<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" v-on:click:active=true isActive>New Release</NavItem>
      <NavItem href="" v-on:click:active=true>Top Rated</NavItem>
      <NavItem href="" v-on:click:active=true>England</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading">Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <TourItem v-if="tours" v-for="(item, index) in tours" :key="index" :item="item.data" />
      <p>{{ tours[0]?.name }}</p>
    </ListView>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useTourStore } from '@/stores/tour'

import TourItem from '@/menu/tour/TourItem.vue'

import NavView from '@/components/NavView.vue'
import NavItem from '@/components/NavItem.vue'
import ListView from '@/components/ListView.vue'

export default defineComponent({
  components: {
    NavView,
    NavItem,
    ListView,
    // ListItem
  },
  setup() {
    const tourStore = useTourStore()

    tourStore.fetchTours()

    // making the store reactive
    const { tours, loading, error } = storeToRefs(tourStore)

    return {
      tours, loading, error
    }
  },
  methods: {

  }
});

</script>
