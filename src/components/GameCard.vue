<template>
  <div class="w-30" un-border="2px black solid">
    <div class="h-40" un-border-b="2px black solid">
      <div class="wh-full relative overflow-hidden" un-hover="[&>div]:(translate-y-0)">
        <div
            class="absolute-0 z-1 flex translate-y-40"
            un-transform
            un-transition
            un-bg="black/66"
            un-flex="center"
        >
          <div un-grid="~ cols-2" class="gap-2">
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
            >
              <i class="i-ph-link-simple-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
            >
              <i class="i-ph-upload-simple-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
            >
              <i class="i-ph-text-t-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
            >
              <i class="i-ph-prohibit-bold inline-block" un-text="white 6"></i>
            </button>
          </div>
          <input type="file" class="wh-0 opacity-0 absolute z-0" @change="selectedImage" ref="uploadBtnRef">
        </div>
        <img class="wh-full object-cover" v-if="item.image" :src="item.image" alt="">
      </div>
    </div>
    <div class="h-10 leading-[1.2] whitespace-pre-line" un-flex="center" un-text="center 4"
         :style="labelFontSize(item.label)">{{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { GameCardItem } from '@/types';
import { ref } from 'vue';

const props = defineProps<{
  item: GameCardItem
}>();

const uploadBtnRef = ref<HTMLInputElement | null>(null);

const labelFontSize = (label: string) => {
  if (label.length > 7) {
    return {
      fontSize: '13px',
    };
  } else {
    return {};
  }
};

function chooseImage() {
  uploadBtnRef.value?.click();
}

function selectedImage() {
  const file = uploadBtnRef.value?.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // 捕获 转换完毕
    reader.onload = function(e) {
      const result = e.target?.result;
      if (typeof result === 'string') {
        props.item.image = result;
        console.log(111, props.item.image);
      }
    };
  }
}
</script>

<style scoped>

</style>



























