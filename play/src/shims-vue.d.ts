// 声明一个模块，模块名为 *.vue，表示所有以.vue 为后缀的文件
declare module '*.vue' {
  // 导入定义组件的类型，以便在模块中使用
  import { DefineComponent } from 'vue';

  // 定义一个组件，它是一个泛型类型，接收三个类型参数：Props、Emits 和 Slots
  const component: DefineComponent<{}, {}, any>;

  // 将组件作为模块的默认导出，使得其他模块可以导入并使用这个组件
  export default component;
}
