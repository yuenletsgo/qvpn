<template>
  <div class="home">
    <h3>👆🏻 Choose a device </h3>
    <p>Give QVPN a world and feel the MAGIC.</p>
    <img src="../assets/disney-logo-dark.png" alt="">
  </div>
</template>

<style scoped lang="scss">
h3 {
  font-size: 30px;
}
p {
  opacity: .6;
}
#nav {
  .btn {
    color: rgba($color: #fff, $alpha: .3);
  }
}
#nav a.router-link-exact-active {
  color: rgba($color: #fff, $alpha: 1);
  &::before {
    opacity: 1 !important;
  }
}
</style>
