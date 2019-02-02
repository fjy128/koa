<template>
<div>
  <label for="city">出发城市</label>
  <city-picker field="city" placeholder="选择您的出发城市" :city-list="cityList" :no-hot="true" :value.sync="cityId"></city-picker>
</div>
</template>
<script>
import 'babel-polyfill'
import cityList from 'china-city-data'
import myCityPicker from 'vue-city-picker'
export default {
  components: {
    'city-picker': myCityPicker
  },
  data () {
    return {
      cityId: '',
      cityList
    }
  }
}
</script>
