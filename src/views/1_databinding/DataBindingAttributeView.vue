<template>
  <div>
    <input type="text" name="" id="" value="abc" v-bind="userId" readonly />
    <input type="text" name="" id="" :value="abc" readonly />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: true,
      imgSrc:
        'https://vuejs.github.io/vetur/assets/img/snippet-main.d3a476c3.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
