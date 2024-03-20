import { createStore } from "vuex";

import * as actions from "@/store/actions";
import * as getters from "@/store/getters";
import * as mutations from "@/store/mutations";
import state from "@/store/state";

const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
