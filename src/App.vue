<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <div>
      <p>
        {{ text }}
      </p>
      <el-button @click="changeText">跳转页面1</el-button>
      <el-input></el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { getInfo } from '@/api/test.ts'
export default {
  name: 'app',
  components: {},
  data() {
      return {
          text: `If Element is successfully added to this project, you'll see an el-button below`
      }
  },
  mounted() {
      this.getUserInfo()
  },
  methods: {
      getUserInfo(): void {
          getInfo().then(res => {
              console.log(res)
          }).catch( err => {
              console.log(err)
          })
          console.log(process.env.VUE_APP_BASE_API)
      },
      changeText(): void {
          this.text = 'hello world'
      }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
