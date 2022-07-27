<template>
  <div class="text-red">
    <h1>Name is {{ userName }}</h1>
    <p>Mssage : {{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John',
      message: ''
    }
  }
}
</script>
<!-- scoped -> 현재 파일에서만 사용할것만쓴다. -->
<style scoped>
.text-red {
  color: red;
  height: 300px;
  width: 300px;
}
</style>
