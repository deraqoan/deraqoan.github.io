<template>
  <div class="page projects">
    <h1 class="title">{{ $store.state.data.route[id] }}</h1>
    <div class="pagebody">
      <div class="cardContainer" @touchmove="touchmove" @touchend="touchend">
        <div
          class="card"
          v-for="(project, idx) in $store.state.data.website.projects"
          :class="{
            currentSection: idx === currentPage,
            preSection: idx < currentPage,
            nextSection: idx > currentPage
          }"
          :style="{
            'z-index': idx < currentPage ? idx : $store.state.data.website.projects.length - idx
          }"
          >
          <img class="screenshot" src="../../assets/muke.png" v-if="idx==0">
          <img class="screenshot" src="../../assets/music.png" v-if="idx==1">
          <img class="screenshot" src="../../assets/xinli.png" v-if="idx==2">
          <p class="description">{{ project.desc }}</p>
          <div class="tool">
            <a class="btn" :href="project.url" target="_blank" v-if="project.url">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
                <path d="M630.88 528.36c-7.264 0-14.512-0.576-21.664-1.736l73.896-73.936 0.568-0.376a27.52 27.52 0 0 0 3.336-2.872l100.792-101.056c30.944-31.016 30.944-81.488 0-112.504a78.68 78.68 0 0 0-56.112-23.304 78.848 78.848 0 0 0-56.152 23.304l-96.68 96.96-4.304 4.192-76.824 76.832c-6.424-42.224 7.424-85.632 37.76-116.064l100.92-101.208a133.68 133.68 0 0 1 95.264-39.576c35.984 0 69.824 14.056 95.272 39.576 52.552 52.688 52.552 138.408 0 191.08L726.024 488.904a133.48 133.48 0 0 1-95.144 39.456z"></path>
                <path d="M391.624 661.72a28.304 28.304 0 0 1-28.256-28.264c0-7.856 3.224-15.184 9.096-20.656L612.56 372.664c5.648-6.064 12.976-9.288 20.832-9.288a28.28 28.28 0 0 1 28.248 28.256 28.24 28.24 0 0 1-8.16 19.864l-6.112 6.232 0.064 0.048-230.576 230.584-0.056-0.032-5.088 4.936a27.92 27.92 0 0 1-20.088 8.456z"></path>
                <path d="M292.288 867a133.672 133.672 0 0 1-95.264-39.56c-52.536-52.688-52.536-138.44 0-191.128l100.92-101.184a133.456 133.456 0 0 1 95.104-39.456c7.128 0 14.224 0.56 21.248 1.68l-76.152 76.136a10.84 10.84 0 0 0-0.672 0.528L236.152 675.64c-30.928 31.016-30.928 81.472 0 112.472a78.792 78.792 0 0 0 56.136 23.312 78.696 78.696 0 0 0 56.112-23.312l100.92-101.168c0.656-0.656 1.24-1.392 1.8-2.128l75.056-75.144c6.608 42.392-7.216 86-37.688 116.592l-100.96 101.176a133.6 133.6 0 0 1-95.24 39.56z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <a class="seeGithub" href="https://github.com/deraqoan/" target="_blank">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z" fill="#ffffff"></path>
        </svg>
        <p>{{ $store.state.data.website.projectRefer }}</p>
      </a>
    </div>
    <div class="qrcodeContainerMask" :class="{ showQrcode }" @click="hideQrcode">
      <div class="qrcodeContainer">
        <img class="qrcode" :src="activeQrcodeUrl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  props: ['id'],
  data: () => ({
    activeQrcodeUrl: '',
    showQrcode: false,
    touchStartY: 0,
    currentPage: 0
  }),
  methods: {
    showQrcodeFunc (url) {
      this.showQrcode = true
      this.activeQrcodeUrl = url
    },
    hideQrcode () {
      this.showQrcode = false
    },
    touchmove (e) {
      if (this.touchStartX !== 0) return
      this.touchStartX = e.changedTouches[0].screenX
    },
    touchend (e) {
      if (this.touchStartX === 0) return

      const touchEndX = e.changedTouches[0].screenX

      if (this.touchStartX - touchEndX > 20) {
        if (this.currentPage === this.$store.state.data.website.projects.length - 1) return
        else this.currentPage++
      } else if (this.touchStartX - touchEndX < -20) {
        if (this.currentPage === 0) return
        else this.currentPage--
      }

      this.touchStartX = 0
    }
  }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
