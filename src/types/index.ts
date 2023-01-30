import type { CARD_CONTENT_TYPE } from '@/enum';

export interface GameCardItem {
  // 标签
  label: string,
  // 类型
  type?: CARD_CONTENT_TYPE,
  // 内容
  content: string,
}
