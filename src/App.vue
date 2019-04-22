<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/test.ts'
export default {
  name: 'app',
  components: {},
  mounted() {
      this.getUserInfo()
  },
  methods: {
      getUserInfo() {
          getInfo().then(res => {
              console.log(res)
          }).catch( err => {
              console.log(err)
          })
          console.log(process.env.VUE_APP_BASE_API)
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
