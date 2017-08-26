<template>
  <div class="page introductions">
    <h1 class="title">个人信息</h1>
    <div class="pagebody">
      <div class="selfInformations">
        <div class="infoRow" v-for="index in Array(Math.ceil($store.state.data.website.infomations.length / 3)).fill(0).map((v, i) => i)">
          <div class="placeholder"></div>
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations">
            <img src="../../assets/birth.png":alt="v.key" :title="v.key" v-if="i==0">
            <img src="../../assets/education.png":alt="v.key" :title="v.key" v-if="i==1">
            <img src="../../assets/yuan.png":alt="v.key" :title="v.key" v-if="i==2">
            <img src="../../assets/local.png":alt="v.key" :title="v.key" v-if="i==3">
            <img src="../../assets/huji.png":alt="v.key" :title="v.key" v-if="i==4">
            <img src="../../assets/email.png":alt="v.key" :title="v.key" v-if="i==5">
            <img src="../../assets/phone.png":alt="v.key" :title="v.key" v-if="i==6">
            <p>&nbsp;{{ v.key + '：' + v.value }}</p>
          </div>
          <div class="placeholder"></div>
        </div>
        <div class="infoRow infoCol">
          <div
            class="infoItem"
            v-for="(v, i) in $store.state.data.website.infomations">
            <img src="../../assets/birth.png":alt="v.key" :title="v.key" v-if="i==0">
            <img src="../../assets/education.png":alt="v.key" :title="v.key" v-if="i==1">
            <img src="../../assets/yuan.png":alt="v.key" :title="v.key" v-if="i==2">
            <img src="../../assets/local.png":alt="v.key" :title="v.key" v-if="i==3">
            <img src="../../assets/huji.png":alt="v.key" :title="v.key" v-if="i==4">
            <img src="../../assets/email.png":alt="v.key" :title="v.key" v-if="i==5">
            <img src="../../assets/phone.png":alt="v.key" :title="v.key" v-if="i==6">
            <p>{{ v.key + '：' + v.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introductions',
  props: ['id']
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
