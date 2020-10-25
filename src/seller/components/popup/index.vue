<template>
  <div>

    <div v-if="type == 1"
         class="popup-warp"
         id="popup-warp"
         @touchmove="close($event)"
         @touchstart="close($event)"
         :class="{'show': myShow}">

      <div class="popup-inner"
           :class="{'show': myShow}"
           @touchstart.stop
           @touchmove.stop
           >
        <slot></slot>
      </div>
      
    </div>

    <div class="popup-in-out c-flex-x-center"
         v-if="type == 2"
         id="popup-in-out"
         @touchmove="close($event)"
         @touchstart="close($event)"
         :class="{'show': myShow}">
      <div class="popup-inner"
           :class="{'show': myShow}">
        <slot></slot>
      </div>
    </div>

  </div>

</template>

<script>

/*
  <!-- 极速发布及一键转卖弹层 -->
  <PopUp v-model.lazy="show">

    <div class="content">
      <div>哈哈哈</div>
    </div>

  </PopUp>

  js：
  // 组件
  import PopUp from '@_seller/components/popup/index.vue'

  export default {
    data() {
      show: true
    },
    components: {
      PopUp,
    },
  }

*/

export default {
  data () {
    return {
      myShow: false,
    }
  },
  props: {
    // 弹窗类型（1：从下而上弹出；2：从无到有渐出）
    type: {
      type: Number,
      default: 1
    },

    // 点击灰色蒙层区域是否关闭弹层
    isCloseMask: {
      type: Boolean,
      default: true
    },

    // 是否展示弹层和弹框
    value: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value (v) {
      this.myShow = v;
    },
    myShow (v) {
      this.$emit('input', v);
    }
  },

  methods: {
    close (e) {
      if (!this.isCloseMask) return;
      console.log(e.target.id)
      if (e.target.id === 'popup-warp' || e.target.id === 'popup-in-out') {
        this.myShow = false;
        this.$emit('popupClosed');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-warp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 888;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: all 0.3s ease;
  &.show {
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .popup-inner {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 889;
    width: 100%;
    overflow: hidden;
    border-radius: 60upx 60upx 0 0;
    transition: all 0.2s ease-out;
    transform: translate3d(0, 100%, 0);
    &.show {
      transform: translate3d(0, 0, 0);
    }
  }
}

/*第二种弹窗模式*/
.popup-in-out {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 888;
  background-color: rgba(0, 0, 0, 0);
  pointer-events: none;
  transition: all 0.3s ease;
  &.show {
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .popup-inner {
    /*position: fixed;*/
    /*left: 0;*/
    /*bottom: 0;*/
    z-index: 889;
    overflow: hidden;

    border-radius: 60upx 60upx 0 0;
    transition: all 0.2s ease-out;
    transform: scale(0);

    &.show {
      transform: scale(1);
    }
  }
}
</style>
