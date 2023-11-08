import { defineStore } from "pinia";

export const useFavCountry = defineStore("favCountry", {
  state: () => {
    return {
      countriesList: [],
      favCountryList: [],
      borderList: [],
    };
  },
  actions: {
    updateList(countryCca3) {
      const countryExistInList = this.favCountryList.some(
        (item) => item.cca3 == countryCca3
      );
      if (!countryExistInList) {
        const indexOfCountry = this.countriesList.findIndex(
          (item) => item.cca3 == countryCca3
        );
        this.favCountryList.push(this.countriesList[indexOfCountry]);
      } else if (countryExistInList) {
        const index = this.favCountryList.findIndex(
          (item) => item.cca3 === countryCca3
        );
        this.favCountryList.splice(index, 1);
      }
    },
  },
  getters: {},
});
