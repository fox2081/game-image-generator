<template>
  <div class="w-full bg-white p-6" un-flex="col" ref="picAreaRef">
    <h2 un-text="12">游戏生涯个人喜好表</h2>
    <div un-flex="shrink-0" un-grid="~ cols-6" class="gap-2">
      <GameCard :item="i" v-for="i in gameList" :key="i.label"></GameCard>
    </div>
  </div>
  <div class="mt-4 space-x-4">
    <button @click="exportData">导出数据</button>
    <button @click="generateAPicture">生成图片</button>
  </div>
</template>

<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import type { GameCardItem } from '@/types';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { reactive, ref } from 'vue';

const gameList = reactive<GameCardItem[]>([
    '最爱的游戏',
    '最棒的剧情',
    '最喜欢的画面',
    '最喜欢的配乐',
    '最难的游戏',
    '最欢乐的游戏',
    '你喜欢\n但大家都讨厌',
    '你讨厌\n但大家都喜欢',
    '最被低估的',
    '最被高估的',
    '配音最好的',
    '配音最烂的',
    '最喜欢的男性角色',
    '最喜欢的女性角色',
    '最喜欢的主角',
    '最喜欢的反派',
    '最讨厌的角色',
    '玩的第一款游戏',
    '最喜欢的\n游戏公司',
    '最讨厌的\n游戏公司',
    '最致郁的',
    '最治愈的',
    '最恐怖的',
    '最喜欢的结局',
    '工作后的放松',
    '“我什么会喜欢这个”',
    '“总有一天我会玩完它的”',
    '不知道玩什么就点开',
    '感觉回到过去',
    '不是最好的\n但我也很喜欢',
].map(label => ({
  label,
  content: ''
})))

const picAreaRef = ref<HTMLDivElement | null>(null)

/**
 * 导出数据
 */
function exportData() {
  const data = {
    version: 1,
    list: gameList
  }
  saveAs(new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"}), '游戏生涯个人喜好表.json')
}

/**
 * 生成图片
 */
function generateAPicture() {
  if (picAreaRef.value) {
    htmlToImage.toBlob(picAreaRef.value)
        .then(blob => {
          if (blob) {
            saveAs(blob, '游戏生涯个人喜好表.png');
          }
        })
        .catch(function (error) {
          console.error('生成失败!', error);
        });
  }
}
</script>

<style scoped>

</style>
