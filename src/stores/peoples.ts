import { defineStore } from 'pinia'
import {ref} from "vue";

export const usePeoplesStore = defineStore('peoples', () => {
    //State
    const characters = ref([])
    const favouriteCharacters = ref([])
    const filtredCharacters = ref([])
    const filterLeading = ref(false)
    const singleCharacter = ref({})

    //Getters


    //Actions

    const getSingleCharacter = async (id:string) => {
        singleCharacter.value = {}
        try {
            const response = await fetch(`https://swapi.dev/api/people/${id}/ `, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            singleCharacter.value = await response.json()
        } catch (e) {
            console.error(e);
        }
    }
    const getFiltredCharacters = async (value:string) => {
        if (value.length) {
            filterLeading.value = true
            try {
                const response = await fetch(`https://swapi.dev/api/people/?search=${value}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const resp = await response.json()
                filtredCharacters.value = resp.results
                console.log(resp.results)
                filterLeading.value = false
            } catch (e) {
                console.error(e);
            }
        } else {
            filtredCharacters.value = []
        }
    }
    const getCharacters = async () => {
        try {
            const response = await fetch(`https://swapi.dev/api/people`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await response.json();
            characters.value = res.results
        } catch (e) {
            console.error(e);
        }
    }

    const getFavourites = () => {
        const response : string = localStorage.getItem('favourite')
        response ? favouriteCharacters.value = JSON.parse(response) : ''

    }

    const addFavourite = (item : object) => {
        const favourite : Array<object> = favouriteCharacters.value
        favourite.push(item)
        localStorage.setItem('favourite', JSON.stringify(favourite) )
    }

    const deleteFavourite = (item : object) => {
        const favourite : Array<object> = []
            favouriteCharacters.value.forEach((el : object) => {
                if (el.name !== item.name) {
                    favourite.push(el)
                }
            })
        localStorage.setItem('favourite', JSON.stringify(favourite))
        getFavourites()
    }


    return { characters, favouriteCharacters, filtredCharacters, filterLeading, singleCharacter, getFiltredCharacters, getFavourites, addFavourite, deleteFavourite, getCharacters, getSingleCharacter }
})