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
    async loginUser({ commit, state }, { requestBody, success }) {
      try {
        const axiosConfig = {
          method: "POST",
          baseURL: "http://localhost:1324",
          url: "/login",
          data: requestBody,
          params: {
            loginType: "email",
          },
        };
        const response = await axios(axiosConfig);
        if (response.data.code === 200 && response.data.message === "SUCCESS") {
          this.loggedInUserInfo = response.data;
          this.isUserLoggedIn = true;
          storage.save("access_token", response.data.data.token);
        }
        success && success(response.data);
      } catch (error) {
        console.error(error);
        window.location.href = "/authenticate/login";
      }
    },
    getUserDetails({ commit, state }, { success }) {
      const axiosConfig = {
        method: "GET",
        baseURL: "http://localhost:1324/secure",
        url: "/user",
        headers: {
          Authorization: "Bearer" + " " + storage.fetch("access_token"),
        },
      };
      axios(axiosConfig)
        .then((response) => {
          if (
            response.data.code === 200 &&
            response.data.message === "SUCCESS"
          ) {
            this.loggedInUserInfo = response.data;
            this.isUserLoggedIn = true;
            storage.save("access_token", response.data.data.token);
          } else {
            window.location.href = "/authenticate/login";
          }
          success && success(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async loginWithGoogle({ commit, state }, { requestBody, success }) {
      try {
        const axiosConfig = {
          method: "GET",
          baseURL: "http://localhost:1324",
          url: "/login/social",
          // params: { loginType: "google" },
        };
        const response = await axios(axiosConfig);
        if (response.data.code === 200 && response.data.message === "SUCCESS") {
          this.loggedInUserInfo = response.data;
          this.isUserLoggedIn = true;
          storage.save("access_token", response.data.data.token);
        }
        success && success(response.data);
      } catch (error) {
        console.error(error);
        window.location.href = "/authenticate/login";
      }
    },
    registerUser({ commit, state }, { requestBody, success }) {
      const axiosConfig = {
        method: "POST",
        baseURL: "http://localhost:1324",
        url: "/signup",
        data: requestBody,
        params: { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone },
      };
      axios(axiosConfig)
        .then((response) => {
          console.log(response);
          success && success(response.data);
          window.location.href = "/authenticate/login";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
