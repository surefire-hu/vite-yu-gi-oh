import { reactive } from "vue";
import axios from 'axios';

export const store = reactive ({
    cards: [],
    archetypes: [],
    selectedArchetype: '',
    loading: false,

    async fetchArchetypes() {
        try {
            this.loading = true;
            const response = await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php');
            this.archetypes = response.data.map(item => item.archetype_name);
            this.loading = false;
        } catch (error) {
            this.loading = false;
        }
    },

    async fetchCards(archetype = '') {
        try {
            this.loading = true;
            let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';
            if (archetype) {
                url += `&archetype=${encodeURIComponent(archetype)}`;
            }
            const response = await axios.get(url);
            this.cards = response.data.data;
            this.loading = false;
        } catch (error) {
            this.cards = [];
            this.loading = false;
        }
    },

    setSelectedArchetype(archetype) {
        this.selectedArchetype = archetype;
        this.fetchCards(archetype);
    },

    get cardCount() {
        return this.cards.length;
    }
});
