<template>
  <div class="page-login">
    <el-row>
      <div class="login-header">
        <a class="logo"
           href="/"></a>
      </div>
    </el-row>
    <el-row>
      <div class="login-panel">
        <div class="banner">
          <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
               width="480"
               height="370"
               alt="美团网">
        </div>
        <div class="form">
          <div v-if="error"
               class="tips">
            <i></i>
            {{error}}
          </div>
          <p>
            <span>账号登录</span>
            <span class="phoneReg">手机动态码登录<i></i></span>
          </p>
          <el-input v-model="userName"
                    placeholder="手机号/用户名/邮箱"
                    prefix-icon="profile"></el-input>
          <el-input placeholder="密码"
                    v-model="passWord"
                    show-password
                    prefix-icon="password"></el-input>
          <div class="foot">
            <a href="#">忘记密码？</a>
          </div>
          <el-button type="primary"
                     class="btn-login"
                     @click="submit">登入</el-button>
          <p class="reg">还没有账号？<a href="#">免费注册</a></p>
          <div class="oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
              <span class="oauth__link oauth__link--qq"
                    data-href="/account/connect/tencent"
                    target="_blank"></span>
              <span class="oauth__link oauth__link--weibo"
                    data-href="/account/connect/sina"
                    target="_blank"></span>
            </div>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <footer>
        <ul>
          <li><a href="#">关于美团</a></li>
          <li><a href="#">加入我们</a></li>
          <li><a href="#">商家入驻</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">美团手机版</a></li>
        </ul>
        <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </footer>
    </el-row>

  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      userName: '',
      passWord: '',
      error: ''
    }
  },
  methods: {
    submit () {
      if (!this.userName) {
        if (!this.passWord) {
          this.error = '请输入账号和密码'
          return false
        }
        this.error = '账号不能为空'
        return false
      }
      if (!this.passWord) {
        this.error = '密码不能为空'
        return false
      }
      api.login({
        params: {
          userName: this.userName,
          password: this.passWord
        }
      }).then(res => {
        console.log(res)
        if (res.data.status === 'success') {
          this.$store.commit('setUserName', this.userName)
          this.$router.push({ name: 'index' })
        } else {
          this.error = res.data.msg
        }
      })
    }
  }
}
</script>
<style lang="sass">
  @import '@/assets/css/login/index.scss'
</style>
