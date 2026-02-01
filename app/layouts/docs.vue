<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

function processNavigation(items: ContentNavigationItem[]) {
  return items.map((item) => {
    if (item.disabled) {
      delete item._path
    }

    if (item.children) {
      item.children = item.children.map((child) => {
        child.disabled = item.disabled || false
        return child
      })
    }

    return item
  })
}

const filteredNavigation = computed(() => {
  const navCopy = JSON.parse(JSON.stringify(navigation?.value || []))
  return processNavigation(navCopy)
})
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="filteredNavigation"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
