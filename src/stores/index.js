import { createStore } from "vuex";
import Authentication from "./modules/authentication";

export default createStore({
  modules: {
    Authentication,
  },
});
