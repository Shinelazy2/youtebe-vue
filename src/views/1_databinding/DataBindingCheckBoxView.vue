<template>
  <div>
    <input type="checkbox" id="html" value="HTML" v-model="favoriteLang" />
    <label for="html">html</label>
    <input type="checkbox" id="js" value="JS" v-model="favoriteLang" />
    <label for="js">js</label>
    <input type="checkbox" id="sc" value="SC" v-model="favoriteLang" />
    <label for="sc">sc</label>
    <br />
  </div>
  <div>선택한 지역은 : {{ favoriteLang }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JS', 'SC']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
