<template>
  <div class="m-header">
    <el-row>
      <top-bar></top-bar>
    </el-row>
    <el-row>
      <search-bar></search-bar>
    </el-row>
  </div>
</template>
<script>
import topBar from './topBar'
import searchBar from './searchBar'

export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
