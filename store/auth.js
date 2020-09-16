export const state = () => ({
  token: true
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  async login({ commit, dispatch, formData }) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("mock-token");
        }, 1000);
      });
    } catch (error) {
      commit("setError", error, { root: true });
      throw error;
    }

    dispatch("setToken", token);
  },
  async createUser({ commit }, formData) {
    try {
      console.log("create user", formData);
    } catch (error) {}
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  logout({ commit }) {
    commit("clearToken");
  }
};

export const getters = {
  isAuthenticated: state => !!state.token
};
