import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import {
  Menu, Submenu, MenuItem, Input, Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Button,
  Table,
  TableColumn,
  Avatar,
  Card,
  Checkbox,
  CheckboxGroup,
} from 'element-ui';

Vue.config.productionTip = false

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Avatar);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
