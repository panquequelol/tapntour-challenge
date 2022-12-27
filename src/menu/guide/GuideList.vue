<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" v-on:click:active=true  isActive>New Guide</NavItem>
      <NavItem href="" v-on:click:active=true >Top Guide</NavItem>
    </NavView>
    <ListView>
  
    </ListView>
  </div>
</template>

<script> 
  import { defineComponent,computed } from "vue"
  import NavView       from '@/components/NavView.vue'
  import NavItem       from '@/components/NavItem.vue'
  import ListView      from '@/components/ListView.vue'
  import GuideItem     from '@/menu/guide/GuideItem.vue'

  export default defineComponent({
    components: {
    NavView,
    NavItem,
    ListView,
    GuideItem
},
    setup() {
  },
  methods: {

  }
})
</script>
