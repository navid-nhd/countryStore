import { defineStore } from 'pinia'

export const useFavCountry = defineStore('favCountry', {
  state: () => {
    return {
      countriesList: [],
      favCountryList: []
    }
  },
  actions: {
    updateList(countryName) {
      const countryExistInList = this.favCountryList.some(
        item => item == countryName
      )
      if (!countryExistInList) {
        // const indexOfCountry = this.countriesList.findIndex(
        //   item => item.cca3 == countryName
        // )
        // console.log(indexOfCountry)
        this.favCountryList.push(countryName)
      } else if (countryExistInList) {
        const index = this.favCountryList.findIndex(item => item == countryName)
        this.favCountryList.splice(index, 1)
      }
    }
  }
})