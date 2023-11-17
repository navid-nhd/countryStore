import { defineStore } from "pinia";

export const useFavCountryStore = defineStore("useFavCountryStore", {
  state: () => {
    return {
      countriesList: [],
      favCountryList: [],
      borderList: [],
      totalCountriesList: []
    };
  },
  actions: {
     fetchAllCountries(param) {
      const favAddedIntoList = param.map((item) => ({
        ...item,
        isFav : false
      }))
      this.totalCountriesList = favAddedIntoList
    },
    updateFavList(countryCca3) {
      const index = this.totalCountriesList.findIndex(
            (item) => item.cca3 === countryCca3
          );
          this.totalCountriesList[index].isFav = this.totalCountriesList[index].isFav ? false : true
      // const countryExistInList = this.favCountryList.some(
      //   (item) => item.cca3 == countryCca3
      // );
      // if (!countryExistInList) {
      //   const indexOfCountry = this.totalCountriesList.findIndex(
      //     (item) => item.cca3 == countryCca3
      //   );
      //   this.favCountryList.push(this.totalCountriesList[indexOfCountry]);
      // } else if (countryExistInList) {
      //   const index = this.favCountryList.findIndex(
      //     (item) => item.cca3 === countryCca3
      //   );
      //   this.favCountryList.splice(index, 1);
      // }
    },
  },
  getters: {
    selectedFavoriteList() {
      try {
        return this.totalCountriesList.filter((item) => item.isFav )
      } catch (error) {
        return []
      }
    },
    // borderCodes() {
    //   try {
    //     return selectedFavoriteList
    //   } catch (error) {
    //     return []
    //   }
    // }
  },
  persist: true
});
