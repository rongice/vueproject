
import Vue from 'vue'
import App from './App.vue'

//顶部导航
import { Header } from "mint-ui";

Vue.component(Header.name, Header);

import './lib/mui/css/mui.min.css'

const vm = new Vue({
    el: '#app',
    render: function (creatElement) {
        return creatElement(App)
    }
})