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
                @click="uploadImage"
            >
              <input type="file" class="wh-0 opacity-0 absolute z-0" @change="selectedImage" ref="uploadBtnRef">
              <i class="i-ph-upload-simple-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
                @click="linkImage"
            >
              <i class="i-ph-link-simple-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
                @click="inputText"
            >
              <i class="i-ph-text-t-bold inline-block" un-text="white 6"></i>
            </button>
            <button
                class="wh-10 block m-0 p-0 leading-0"
                un-hover="bg-[#36ad6a]"
                un-focus="outline-none"
                un-transition
                un-flex="center" un-bg="[#18a058]" un-border="0 rounded-1"
                @click="clearContent"
            >
              <i class="i-ph-prohibit-bold inline-block" un-text="white 6"></i>
            </button>
          </div>
        </div>
        <img
            v-if="[CARD_CONTENT_TYPE.upload, CARD_CONTENT_TYPE.link].includes(item.type) && item.content"
            class="wh-full object-cover"
            :src="item.content"
            alt=""
        >
        <div
            class="wh-full p-4 box-border leading-[1.2]" un-flex="center"
            v-if="item.type === CARD_CONTENT_TYPE.text"
            :style="contentFontSize(item.content)"
        >{{ item.content }}</div>
      </div>
    </div>
    <div class="h-10 leading-[1.2] whitespace-pre-line" un-flex="center" un-text="center 4"
         :style="labelFontSize(item.label)">{{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { CARD_CONTENT_TYPE } from '@/enum';
import { GameCardItem } from '@/types';
import { ref } from 'vue';

const props = defineProps<{
  item: GameCardItem
}>();

const uploadBtnRef = ref<HTMLInputElement | null>(null);

const labelFontSize = (text: string) => {
  if (text.length > 7) {
    return {
      fontSize: '0.8125rem',
    };
  } else {
    return {};
  }
};

const contentFontSize = (text: string) => {
  if (text.length > 10) {
    return {
      fontSize: '1.2rem',
    };
  } else {
    return {
      fontSize: '1.6rem',
    };
  }
};

/**
 * 选择图片
 */
function uploadImage() {
  uploadBtnRef.value?.click();
}

/**
 * 选中图片后的处理
 */
function selectedImage() {
  const file = uploadBtnRef.value?.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      const result = e.target?.result;
      if (typeof result === 'string') {
        props.item.type = CARD_CONTENT_TYPE.upload;
        props.item.content = result;
      }
    };
  }
}

/**
 * 链接图片
 */
function linkImage() {
  const result = window.prompt('请输入图片链接');
  if (result) {
    props.item.type = CARD_CONTENT_TYPE.link;
    props.item.content = result;
  } else {
    alert('无效的地址')
  }
}

/**
 * 输入文本
 */
function inputText() {
  const result = window.prompt('请输入文本内容，不超过20个字');
  if (result && result.length <= 20) {
    props.item.type = CARD_CONTENT_TYPE.text;
    props.item.content = result;
  } else {
    alert('无效的文本内容')
  }
}

/**
 * 清除内容
 */
function clearContent() {
  props.item.type = undefined;
  props.item.content = '';
}
</script>

<style scoped>

</style>



























