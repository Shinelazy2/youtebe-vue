<template>
  <div>
    <select id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="054">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '051'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    selected() {
      console.log(this.selectedCity)
    }
  }
}
</script>
