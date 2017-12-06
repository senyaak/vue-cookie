import Vue from "vue";
import {VueCookie} from "./vue-cookie";
declare module "vue/types/vue" {
  interface Vue {
    $cookie: VueCookie;
  }
}
