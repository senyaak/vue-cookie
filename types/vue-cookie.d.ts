import {VueConstructor} from "vue/types/vue";
export interface VueCookie {
  install(Vue: VueConstructor): void;
  set(key: string, value: string, options: Options): void;
  get(key: string): string;
  delete(key: string, options: Options): void;
}

type Options = {expires: Date | String | Number} | Number | String;
