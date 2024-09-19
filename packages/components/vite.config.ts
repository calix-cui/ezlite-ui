import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    // ESModules
    // outDir: 'es',
    minify: false,
    // target 转换过程将会由 esbuild 执行，并且此值应该是一个合法的 esbuild 目标选项
    // target: 'modules',
    // 自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。
    rollupOptions: {
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          // 打包格式 amd | cjs | iife | umd | es | system
          format: 'es',
          entryFileNames: '[name].js',
          // 这种模式将为所有模块创建单独的代码块，并使用原始模块名称作为文件名。需要设置 output.dir 选项。
          preserveModules: true,
          dir: '../../es',
          exports: 'named',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: '../../cjs',
          exports: 'named',
        },
        // {
        //   globals: {
        //     vue: 'Vue'
        //   },
        //   format: 'umd',
        //   name: 'ezlite',
        //   entryFileNames: "[name].umd.cjs",
        //   preserveModules: true,
        //   dir: "../ezlite/umd",
        //   exports: 'named',
        // },
      ],
    },
    // 该值应该是UMD模式下lib的全局名称，这将产生esm + cjs + umd包格式，其默认配置适合于发行库。
    lib: {
      entry: './index.ts',
      name: 'ezlite',
      // fileName: 'ezlite',
      // formats: ['es', 'cjs', 'umd'],
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './',
      exclude: './vite.config.ts',
      outDir: ['../../es', '../../cjs'],
    }),
  ],
})
