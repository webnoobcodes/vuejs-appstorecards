<template>
  <div class="card-wrapper">
    <div class="card" @click="handleView($event)"
      :class="{'open': item.open}"
      :style="styleObject">
      <div class="card-top">
        <div class="img" 
        :style="{'background-image': 'url('+ require('../assets'+ item.img)+')'}"></div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="description">{{ item.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data: () => {
    return {
      styleObject: {
        transform: 'translate(0px,0px)'
      }
    };
  },
  methods: {
    handleView(el) {
      this.item.open = !this.item.open;
      let viewportOffset = el.target.getBoundingClientRect();

      if(this.item.open) {
        document.body.style.top = '-' + window.scrollY + 'px';
        document.body.style.position = 'fixed';

        this.styleObject.transform = 
          'translate('+ viewportOffset.left * -1 +'px, '+ viewportOffset.top * -1 +'px)';
      }
      else {
        this.styleObject = {
          transform: 'translate(0px,0px)'
        };

        let scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  margin-bottom: 20px;
  width: 100%;
  height: 450px;

  .card {
    position: relative;
    border-radius: 20px;
    width: 100%;
    height: 450px;
    border: 1px solid #fff;
    background-color: #efefef;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    transition: all .5s cubic-bezier(.6,0,.45,1.3);

    &.open {
      z-index: 100;
      border-radius: 0;
      border: 0;
      width: 100vw;
      height: 100vh;
    }

    .card-top, .title, .description, .img {
      pointer-events: none;
    }

    .card-top {
      position: relative;
      background-color: #fff;

      .img {
        width: 100%;
        height: 450px;
        background-position: center;
        background-size: cover;
      }

      .title {
        position: absolute;
        bottom: 0;
        padding: 5px 20px;
        width: calc(100% - 40px);
        height: 40px;
        color: #fff;
        background-color: #222;
        font-size: 1.6rem;
      }
    }

    .description {
      padding: 20px;
    }
  }
}
</style>
