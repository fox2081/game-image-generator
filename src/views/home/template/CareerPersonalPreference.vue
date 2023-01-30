<template>
  <div class="w-full" un-flex="col">
<!--    <h2>游戏生涯个人喜好表</h2>-->
    <div un-flex="shrink-0" un-grid="~ cols-6" class="gap-2">
      <GameCard :item="i" v-for="i in [gameList[0]]" :key="i.label"></GameCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import { GameCardItem } from '@/types';
import { reactive } from 'vue';

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
  image: ''
})))
</script>

<style scoped>

</style>
