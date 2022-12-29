import { defineStore } from "pinia";

const guide_endpoint = "https://tapntour-wk-db.glyfo.workers.dev/api/guides";

export const useGuideStore = defineStore({
  id: "guide",
  store: () => ({
    guides: [],
    guide: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchGuides() {
      this.guides = [];
      this.loading = true;
      try {
        const response = await fetch(guide_endpoint, { method: "POST" });
        const data = await response.json();
        this.guides = [...this.tours, ...data];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
