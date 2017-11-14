<template>
  <div>
    <!-- 左侧展示图片区域 -->
    <div class="showbar">
      <div class="cover-image"></div>
      <div class="text">
        <h1>简书</h1>
        <h3>交流故事</h3>
        <p>一个基于内容分享的社区</p>
        <router-link to="/write">
          <i class="fa fa-home"></i>
          提笔写文章
        </router-link>
      </div>
    </div>
    <div class="article-page">
      <!-- 右侧顶部导航栏 -->
      <nav>
        <span class="nav-text fir">
          <a href="#">发现</a>
        </span>
        <span class="nav-text">
          <router-link to="/bonus">2016精选</router-link>
        </span>
        <span class="search clearfloar">
          <span class="input">
           <input type="search" placeholder="搜索"/>
            <span class="search-icon">
              <i class="fa fa-search"></i>
            </span>
          </span>
        </span>
      </nav>
      <div class="article-list">
        <!-- 右侧中部分类导航栏 -->
        <ul class="btn-group">
          <li :class="{active: show === 'hot'}" @click="displayArticles('hot')">
            <router-link to="/home/article/hot">热门</router-link>
          </li>
          <li :class="{active: show === 'new'}" @click="displayArticle('new')">
            <router-link to=""></router-link>
          </li>
        </ul>
        <!-- 右侧中部分类列表展示 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters} from 'vuex'
  export default {
    //mapGetters中接收的参数表示，在页面上定义的show参数通过getters的getShow方法来获取
    computed: mapGetters({
      show: 'getShow'
    }),
    methods: {
      //该方法表示触发store的actions中的displayArticles
      displayArticles (type) {
        this.$store.dispatch('displayArticles',type)
      }
    },
    //页面加载完后，触发store的actions中的displayArticles和changeArticleFlag
    mounted () {
      this.$store.dispatch('displayArticles','hot');
      this.$store.dispath('changeArticleFlag',true);
    }
  }

</script>









