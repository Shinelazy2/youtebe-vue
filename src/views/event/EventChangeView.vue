<template>
  <div>
    <!-- v-on  === @ -->
    <!-- <select name="" id="" @change="changeCity" v-model="selectedCity"> -->

    <!-- $를 사용해서 evnet.target 쓸 수 있음 -->
    <!-- <select name="" id="" @change="changeCity($event)" v-model="selectedCity"> -->
    <select name="" id="" v-on:change="changeCity" v-model="selectedCity">
      <option value="">===도시선택===</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <!-- 권장하는 방법 -->
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <!-- @Change 없어도댐 -->
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '대구' },
        { cityCode: '064', title: '인천' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울1동' },
        { cityCode: '02', dongCode: '1', dongTitle: '서울2동' },
        { cityCode: '02', dongCode: '1', dongTitle: '서울3동' },
        { cityCode: '051', dongCode: '1', dongTitle: '대구1동' },
        { cityCode: '064', dongCode: '1', dongTitle: '인천1동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
