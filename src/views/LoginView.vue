<!--
 * @Author: kurimoto
 * @LastEditors: kurimoto
 * @Date: 2022-10-25 10:06:11
 * @LastEditTime: 2022-10-25 10:40:17
 * @Description: file content
 * @FilePath: /src/views/LoginView.vue
-->
<template>
    <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="24">
            <a-card title="练习项目">
                <a-card-grid style="width: 25%; text-align: center" @click="increment">{{state.count}}</a-card-grid>
            </a-card>
        </a-col>
    </a-row>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
    state.count++
}
</script>