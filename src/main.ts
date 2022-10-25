/*
 * @Author: kurimoto
 * @LastEditors: kurimoto
 * @Date: 2022-10-25 09:28:39
 * @LastEditTime: 2022-10-25 10:08:49
 * @Description: file content
 * @FilePath: /src/main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';

import './assets/main.css'
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
