<template>
  <div>
    <ul>
      <li class="list" v-for="article in articles">
        <p class="list-top">
          <a href="#" class="author">
            <span>{{article.author}}</span>
          </a>
          <span class="time">
            - {{article.time}}
          </span>
        </p>
        <h2 class="title">
          <!-- 点击文章的标题会进入到文章展示页面，在这里设置路由 -->
          <router-link to="/article/123211">{{article.title}}</router-link>
        </h2>
        <span class="small-text">阅读 {{article.read}}</span>
        <span class="small-text">评论 {{article.comment}}</span>
        <span class="small-text">喜欢 {{article.like}}</span>
        <span class="small-text">打赏 {{article.pay}}</span>
        <span class="image" :style="{background: article.src, backgroundSize: '100%',backgroundRepeat:'no-repeat'}"></span>
      </li>
    </ul>
  </div>
</template>
