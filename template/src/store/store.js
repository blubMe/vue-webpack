import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import { getters } from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { actions } from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mutations } from './mutations'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
    state: {
        count: 0,
      },
      mutations,
      getters,
      actions,
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
