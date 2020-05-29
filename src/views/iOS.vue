<template>
  <div class="view ios">
    <h3 class="title"><img src="../assets/ios-dark.svg" alt=""> iOS</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>Download Shadowrocket</h3>
        <p class="info">You can download Shadowrocket here: <a href="https://apps.apple.com/tw/app/shadowrocket/id932747118" target="_blank">App store</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>Import QRcode from your album</h3>
        <p class="info">
          Click scan icon in the Upper left corner, and scan QRcode.<br>You can also save QRcode and import the QRcode from your album to Shadowrocket.
        </p>
        <img class="s" src="../assets/ios-1.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>Turn on Disney+ and allow Shadowrocket to add configuration</h3>
        <img class="s" src="../assets/ios-2.png" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Go to setting and turn on VPN configuration</h3>
      </div>
      <div class="wrap">
        <h3><span class="number">5</span>Download Disney+ App</h3>
        <div class="caution">💡You will need to have United States apple account to download the app.</div>
        <p class="info">Go to <a href="https://www.disneyplus.com/home" target="_blank">Disney+ Account</a> and sing up account.<br/>You can join our community to try a Disney+ free trail.</p>
      </div>
      <div class="done"><h4>🎉 ALL DONE! ENJOY.</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iOS',
  props: {
    msg: String
  }
}
</script>

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
