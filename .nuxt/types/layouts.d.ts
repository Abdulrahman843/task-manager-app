import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Abdulrahman/Desktop/Vue_Nuxt/task-manager-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}