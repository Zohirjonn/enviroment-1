<template>
  <div class="small:m-4">
    <div>
      <Header />
    </div>
    <div>
      <Pizza />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header/Header.vue";
import Pizza from "../components/Body/Pizza.vue";
export default {
  components: {
    Header,
    Pizza,
  },
  data() {
    return {};
  },
  methods: {},
  
};
</script>
<style lang=""></style>
