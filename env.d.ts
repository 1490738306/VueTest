/*
 * @Author: kurimoto
 * @LastEditors: kurimoto
 * @Date: 2022-10-25 09:28:39
 * @LastEditTime: 2022-10-25 10:13:33
 * @Description: file content
 * @FilePath: /env.d.ts
 */
/// <reference types="vite/client" />
declare module '*.vue'{
    import type {DefineComponent} from "vue";
    const component:DefineComponent<{},{},any>
    export default component;
}