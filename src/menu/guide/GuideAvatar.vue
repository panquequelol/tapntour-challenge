<template>
<div class="absolute top-0 left-0 flex item-center">
  <img class="w-16 h-16 rounded-tr-lg" src="https:/flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
</div>

</template>

<script>

export default {
  name: "GuideAvatar",
    components: {
  },
  data() {
    return {
      audio: "",
    };
  },
  methods: {
    play() {
      console.log("audio");
    },
  },
};
</script>