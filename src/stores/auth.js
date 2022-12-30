import { defineStore } from "pinia";
import axios from "axios";
import storage from "@/utils/storage";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    loggedInUserInfo: {},
    isUserLoggedIn: false,
  }),
  getters: {
    getLoggedInUserInfo: (state) => state.loggedInUserInfo,
    getIsUserLoggedIn: (state) => state.isUserLoggedIn,
  },
  actions: {
    async loginUser(requestBody, success) {
      const axiosConfig = {
        method: "POST",
        baseURL: "http://localhost:1324/",
        url: "/login",
        data: requestBody,
        params: { loginType: "email" },
      };
      axios(axiosConfig)
        .then((response) => {
          // console.log(response.data);
          if (response.code === 200 && response.message === "SUCCESS") {
            this.loggedInUserInfo = response.data;
            this.isUserLoggedIn = true;
          }
          success && success(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getUserDetails({ commit, state }, { success }) {
      const axiosConfig = {
        method: "get",
        baseURL: "http://localhost:9006/api/v1/auth",
        url: "/secure/user",
        headers: {
          Authorization: "Bearer" + " " + storage.fetch("access_token"),
        },
      };
      axios(axiosConfig)
        .then((response) => {
          if (response.data.apiResponseStatus === "SUCCESS") {
            commit("setloggedInUserInfo", response.data.responseObject);
            commit("setIsUserLoggedIn", true);
          }
          success && success(response.data);
        })
        .catch((error) => {
          console.error(error);
          window.location.href = "/authenticate/login";
        });
    },
    registerUser({ commit, state }, { requestBody, success }) {
      const axiosConfig = {
        method: "POST",
        baseURL: "http://localhost:9006/api/v1/auth",
        url: "/authenticate/register",
        data: requestBody,
      };
      axios(axiosConfig)
        .then((response) => {
          // console.log(response);
          success && success(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
