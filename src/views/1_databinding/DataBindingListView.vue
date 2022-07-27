<template>
  <div>
    <div>
      <select name="" id="">
        <option></option>
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <!-- 키값이 없다면? index -->
          <tr :key="index" v-for="(drink, index) in drinkList">
            <td>{{ drink.id }}</td>
            <td>{{ drink.name }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" v-model="drink.qty" /></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '021' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          id: '1',
          name: 'Coke',
          price: 700,
          qty: 1
        },
        {
          id: '2',
          name: 'Q',
          price: 1700,
          qty: 1
        },
        {
          id: '3',
          name: 'W',
          price: 2700,
          qty: 1
        },
        {
          id: '4',
          name: 'E',
          price: 300,
          qty: 1
        },
        {
          drink: '5',
          name: 'R',
          price: 500,
          qty: 1
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
