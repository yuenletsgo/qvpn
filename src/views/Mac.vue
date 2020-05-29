<template>
  <div class="view mac">
    <h3 class="title"><img src="../assets/mac-dark.svg" alt=""> Mac OS</h3>
    <div class="hr"></div>
    <div class="content">
      <div class="wrap">
        <h3><span class="number">1</span>Download v2rayU</h3>
        <p class="info">You can download the v2RayU Client here: <a href="" target="_blank"> V2rayU.dmg</a></p>
      </div>
      <div class="wrap">
        <h3><span class="number">2</span>Copy Vmess</h3>
        <div class="config">
          <h3>Your Configuration</h3>
          <div class="input" v-on:click="CopyAction">
            <div id="copy">Tab to copy</div>
            <div class="input-text">"weight" : 1586962875,"title" : "new server","host" : "hk.3qqq.io","file" : "","uuid" : "DF4CC657-6F8A-4F51-B6A7-E61D140D42F8","method" : "auto",</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <h3><span class="number">3</span>Click “Import Server From Pasteboard” via menu bar's v2rayU icon</h3>
        <img src="../assets/macos-1.gif" alt="">
      </div>
      <div class="wrap">
        <h3><span class="number">4</span>Sign up your Disney+ Account</h3>
        <p class="info">Go to <a href="https://www.disneyplus.com/home" target="_blank">Disney+ Account</a> and sing up account.<br/>You can join our community to try a Disney+ free trail.</p>
      </div>
      <div class="done"><h4>🎉 ALL DONE! ENJOY.</h4></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'CopyAction',
  methods: {
    CopyAction () {
      $(document).ready(function () {
        $('#copy').click(function (event) {
          CopyToClipboard('COPY COPY', true, 'Value copied')
        })
      })

      function CopyToClipboard (value, showNotification, notificationText) {
        var $temp = $('<input>')
        $('body').append($temp)
        $temp.val(value).select()
        document.execCommand('copy')
        $temp.remove()

        if (typeof showNotification === 'undefined') {
          showNotification = true
        }
        if (typeof notificationText === 'undefined') {
          notificationText = 'Copied to clipboard'
        }

        var notificationTag = $('div.copy-notification')
        if (showNotification && notificationTag.length === 0) {
          notificationTag = $('<div/>', { class: 'copy-notification', text: notificationText })
          $('body').append(notificationTag)

          notificationTag.fadeIn('slow', function () {
            setTimeout(function () {
              notificationTag.fadeOut('slow', function () {
                notificationTag.remove()
              })
            }, 1000)
          })
        }
      }
    }
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

<style lang="scss" scoped>
.copy-notification {
  color: #ffffff;
  background-color: rgba(0,0,0,0.8);
  padding: 20px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  margin-top: -30px;
  margin-left: -85px;
  display: none;
  text-align:center;
}
</style>
