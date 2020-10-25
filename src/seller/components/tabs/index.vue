<template>
  <div>

    <div class="components-tabs">

      <div class="overlay" v-if="itemShow" @click="close"></div>
      <div class="tabs c-flex-x-center" :class="{'auto': showLater}" :style="{'height': height + 'rpx'}">

        <div class="tabs-item c-flex-x-between" 
              :style="{width: (710 / tabs.length) + 'rpx'}"
              v-for="(item, index) in tabs" :key="index" @click.stop="toggle(item, index)">
          <div class="text">{{item.title || ''}}</div>
          <div :class="['arrow', {'show': curTab == item.id && itemShow}]"><img src="@_seller/assets/img/common/arrow.png"></div>
        </div>

        <div :class="['down-list']"
          :style="{
            'top': itemShow ? '106rpx' : '-100%',
            'opacity': itemShow ? '1' : '0',
            'max-height': 5 * 90 + 45 + 'rpx',
          }">
          <div class="down-list-item c-flex-x-between" 
            v-for="(item, index) in list" :key="index"
            @click="choose(item)">
            <div>{{item.title || ''}}</div>

            <div v-if="curId == item.id" class="choose"><img src="@_seller/assets/img/common/choose.png"></div>
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

/*
  <!-- 极速发布及一键转卖弹层 -->
  <Tabs :tabs="tabs" @choose="choose"></Tabs>

  js：
  // 组件
  import Tabs from '@_seller/components/tabs/index.vue'

  export default {
    data() {
      tabs: [
        {
          id: 1,
          title: '品牌',
          data: [
            {title: 'LV'},
            {title: 'LV1'},
          ]
        },
        {
          id: 2,
          title: '系列',
          data: [
            {title: 'GUCCI'},
            {title: 'GUCCI1'},
            {title: 'GUCCI2'},
          ]
        },
      ]
    },
    components: {
      PopTabsUp,
    },
    methods: {
      choose (item) {
        console.log(item)
      }
    }
  }

*/

export default {
  data () {
    return {
      itemShow: false,
      showLater: false,

      list: [],
      height: 0,

      curTab: 1,
      curId: '',

    }
  },
  props: {
    // 选择的品牌id
    id: {
      type: Number,
      default: 0
    },
    // tab数据
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  watch: {

  },

  mounted () {
    this.list = this.tabs[0].data
    this.height = 104 + (this.list.length * 90)
    this.curId = this.id
      
  },

  methods: {

    toggle (item, index) {
      // console.log(item)
      // console.log(index)

      let data = item.data || []
      this.list = data
      this.height = 104 + (this.list.length * 90)

      console.log(this.list.length)

      let listNow = this.tabs

      if (this.curTab == item.id) {
        if (this.itemShow) {
          this.itemShow = false

          listNow[index].itemShow = false
        } else {
          this.itemShow = true

          listNow[index].itemShow = true
        }
      } else {
        this.itemShow = false

        listNow[index].itemShow = false

        setTimeout(() => {
          this.itemShow = true

          listNow[index].itemShow = true
        }, 100)
      }

      this.curTab = item.id
      this.tabs = listNow

      console.log(this.tabs)

    },

    close () {

      this.itemShow = false
      this.showLater = false
      
      this.tabs.map((item) => {
        item.itemShow = false
      })
    },

    choose (item) {
      this.curId = item.id || ''

      this.$emit('choose', item)

      this.close()
    }

  }
}
</script>

<style lang="scss" scoped>
.components-tabs {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #00000086;
  }
  .tabs {
    width: 100%;
    position: relative;
    overflow: hidden;
    align-items: flex-start;
    // padding: 0 20upx;

    transition: all 0.2s linear;

    .tabs-item {
      box-sizing: border-box;
      // width: 50%;
      padding: 0 40upx;
      height: 104upx;
      background: #fff;
      z-index: 100;
      border-top: 1upx solid #1C1717;
      border-bottom: 1upx solid #1C1717;
      border-left: 1upx solid #1C1717;

      .text {
        font-family: PingFangSC-Medium;
        font-size: 28upx;
        color: #1C1717;
        z-index: 100;
      }

      .arrow {
        width: 28upx;
        height: 28upx;
        z-index: 100;
        transform: rotate(0);

        transition: all 0.2s linear;

        img {
          width: 100%;
          height: 100%;
        }

        &.show {
          transform: rotate(-180deg);

          transition: all 0.2s linear;
        }
      }

      &:first-child {
        border-left: 0;
      }

    }

    .down-list {
      position: absolute;
      width: 100%;
      // top: -100%;
      left: 0;
      background: #fff;
      z-index: 99;

      transition: all 0.2s linear;
      overflow-y: scroll;

      .down-list-item {
        box-sizing: border-box;
        width: 90%;
        height: 90upx;
        padding: 0 30upx;

        .choose {
          width: 30upx;
          height: 30upx;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

    }

    &.auto {
      height: auto !important;
    }

  }
}
</style>
