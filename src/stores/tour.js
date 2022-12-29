import { defineStore } from "pinia";

const tour_endpoint = "https://tapntour-wk-db.glyfo.workers.dev/api/tours";

export const useTourStore = defineStore({
  id: "tour",
  state: () => ({
    tours: [],
    tour: null,
    loading: false,
    error: null,
  }),
  getters: {
    getTourbyCountry: (state) => {},
  },
  actions: {
    async fetchTours() {
      this.tours = [];
      this.loading = true;
      try {
        const response = await fetch(tour_endpoint, { method: "POST" });
        const data = await response.json();
        this.tours = [...this.tours, ...data];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchTourbyId(id) {
      this.tour = null;
      this.loading = true;
      try {
        this.post = await fetch(tourbyid_endpoint).then((response) =>
          response.json()
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
