<template>
  <div class="user-list">
    用户
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scope>
.user-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -600px;
    right: 0;
    z-index: 101;
    width: 410px;
    background: #34393f;
}
</style>