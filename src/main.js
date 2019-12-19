import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import CardList from './components/CardList'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', name: 'cardlist', component: CardList },
    { path: '/:id', name: 'card', component: CardList,
      props: (route) => {
        let id = parseInt(route.params.id);
        return { id };
      } 
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
