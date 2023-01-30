import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss';

// 没有直接写在class里面的图标在这里定义
const staticIconList: string[] = [];

export default defineConfig({
  exclude: ['node_modules', '.git', '.husky', '.vscode', 'dist', 'public', 'build', 'mock', './stats.html'],
  presets: [
    // uno预设
    presetUno({ dark: 'class' }),
    // 使用固定前缀`un-`，防止属性冲突
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    // 图标使用默认配置
    presetIcons(),
  ],
  transformers: [
    // 支持圆括号内的组写法，如 hover:(text-blue font-bold)
    transformerVariantGroup(),
  ],
  shortcuts: [
    {
      // flex布局预设
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'flex-end': 'flex justify-end items-center',
      'flex-col-center': 'flex-center flex-col',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'i-flex-center': 'inline-flex justify-center items-center',
      'i-flex-x-center': 'inline-flex justify-center',
      'i-flex-y-center': 'inline-flex items-center',
      'flex-col': 'flex flex-col',
      'flex-col-stretch': 'flex-col items-stretch',
      'i-flex-col': 'inline-flex flex-col',
      'i-flex-col-stretch': 'i-flex-col items-stretch',
      'flex-1-hidden': 'flex-1 overflow-hidden',
      // absolute预设
      'absolute-0': 'absolute left-0 top-0 right-0 bottom-0',
      'absolute-lt': 'absolute left-0 top-0',
      'absolute-lb': 'absolute left-0 bottom-0',
      'absolute-rt': 'absolute right-0 top-0',
      'absolute-rb': 'absolute right-0 bottom-0',
      'absolute-tl': 'absolute-lt',
      'absolute-tr': 'absolute-rt',
      'absolute-bl': 'absolute-lb',
      'absolute-br': 'absolute-rb',
      'absolute-center': 'absolute-lt flex-center wh-full',
      // fixed预设
      'fixed-t': 'fixed left-0 right-0 top-0',
      'fixed-lt': 'fixed left-0 top-0',
      'fixed-lb': 'fixed left-0 bottom-0',
      'fixed-rt': 'fixed right-0 top-0',
      'fixed-rb': 'fixed right-0 bottom-0',
      'fixed-tl': 'fixed-lt',
      'fixed-tr': 'fixed-rt',
      'fixed-bl': 'fixed-lb',
      'fixed-br': 'fixed-rb',
      'fixed-center': 'fixed-lt flex-center wh-full',
      'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
      // 省略文本
      'ellipsis-text': 'nowrap-hidden overflow-ellipsis text-ellipsis',
      // 基础动画
      'transition-base': 'transition-all duration-300 ease-in-out',
    },
    // 同比宽高
    [/^wh-(.*)$/, ([, c]) => `w-${c} h-${c}`],
  ],
  theme: {
    boxShadow: {
      'base-side': 'inset 2px 0 0 0 #62c9ff',
      header: '0px 3px 8px 1px rgb(0 0 0 / 12%)',
      card: '0px 0px 10px 1px rgba(0,0,0,0.12)',
      'inner-blue': 'inset 0px 0px 0px 1px #5E9CF3',
    },
  },
  safelist: [...staticIconList],
});
