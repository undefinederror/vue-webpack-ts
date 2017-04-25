<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#ts}}<p>\{{msg}}</p>{{/ts}}
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script{{#ts}} lang="ts"{{/ts}}>
{{#unless router}}
import Hello from './components/Hello{{#ts}}.vue{{/ts}}'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#ts}}
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

{{/ts}}
{{/unless}}
{{#ts}}@Component({
  components: { Hello }
}){{/ts}}
export default{{#ts}} class App extends Vue{{/ts}} {
{{#ts}}
  ts:string= 'typescript'

  get msg ():string {
    return `compiled with ${this.ts}`
  }
{{else}}
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/ts}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
