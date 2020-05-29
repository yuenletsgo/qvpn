<template>
  <div class="view android">
    some android bullshite here.
  </div>
</template>

<script>
export default {
  name: 'Android',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style lang="scss">
  #nav {
    .btn {
      color: rgba($color: #fff, $alpha: .4);
       &::before {
        opacity: .4 !important;
      }
    }
  }
  #nav a.router-link-exact-active {
    color: rgba($color: #fff, $alpha: 1);
    &::before {
      opacity: 1 !important;
    }
  }
</style>
