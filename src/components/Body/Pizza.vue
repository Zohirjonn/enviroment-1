<template>
  <div>
    <div class="text-3xl font-extrabold text-center tracking-wider mb-35px">
      <span>Все пиццы</span>
    </div>
    <div
      class="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 xl:gap-y-16 xl:gap-x-16 relative"
    >
      <div
        class="card flex flex-col justify-between small:justify-around sm:flex-col mx-auto small:mx-0 small:border-2 border-white-4 rounded-10px small:p-4 small:shadow-def"
        v-for="item in getPizzas"
        :key="item.id"
      >
        <div class="card-header flex flex-col justify-center mb-5">
          <div
            class="card-img flex justify-center mx-auto small:max-w-250px sm:max-w-250px md:max-w-300px"
          >
            <img :src="item.imageUrl" alt="..." />
          </div>
          <div
            class="card-title text-xl font-extrabold small:max-w-200px mx-auto max-w-full text-center mt-2.5"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="grid">
          <div
            class="card-body w-full flex flex-col justify-between small:max-w-560px small:mx-auto bg-white-5 p-2 rounded-10px mb-4"
          >
            <div class="flex mb-1.5">
              <button
                class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-def"
                v-for="typeItem in item.types"
                :key="typeItem"
                :class="
                  pizza.id == item.id
                    ? pizza.type == typeItem
                      ? 'bg-white-1'
                      : ''
                    : ''
                "
                @click="typesMethod(item, typeItem)"
              >
                {{ typeItem }}
              </button>
            </div>
            <div class="flex">
              <button
                class="py-2 flex-1 text-center rounded-5px text-sm font-bold shadow-def"
                v-for="size in item.sizes"
                :key="size"
                :class="
                  pizza.id == item.id
                    ? pizza.size == size
                      ? 'bg-white-1'
                      : ''
                    : ''
                "
                @click="sizeMethod(item, size)"
              >
                {{ size }} см
              </button>
            </div>
          </div>
          <div
            class="card-footer flex justify-between small:justify-around items-center xl:space-x-10 space-x-0"
          >
            <div class="font-extrabold text-2xl">
              <span>от {{ item.price }}₽</span>
            </div>
            <div :class="pizza.size == null ? '' : 'btn'">
              <button
                class="border border-orange-2 text-base py-2 px-4 rounded-large font-bold flex items-center justify-between gap-2"
                :class="
                  item.count !== 0
                    ? 'text-orange-1 '
                    : 'text-white-1 bg-orange-1'
                "
                @click.prevent="addItemMethod(item)"
              >
                <span>+Добавить </span>
                <span
                  class="bg-orange-1 text-white-1 w-22px h-22px rounded-50% items-center flex justify-center text-xs"
                  v-if="item.count !== 0"
                >
                  {{ item.count }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="loader">
        <div
          v-if="loader"
          class="static top-10 left-0 right-0 bottom-0 bg-black-2"
        >
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../Loader/Loader.vue";
// import Fff from "./fff.vue";
import { notify } from "../toast";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      pizza: {
        id: null,
        type: "Тонкое",
        size: 26,
      },
      size: "",
      types: "",
      loader: null,
      basket: [],
    };
  },
  methods: {
    async getDB() {
      this.loader = true;
      const response = await axios.get("./data/db.json");
      const res = await response.data;
      this.$store.commit("pushPizzasMethod", { value: res.pizzas });
      this.loader = false;
    },
    addItemMethod(item) {
      const pizza = JSON.parse(
        JSON.stringify({
          id: this.pizza.id,
          imageUrl: item.imageUrl,
          name: item.name,
          price: item.price,
          type: this.pizza.type,
          size: this.pizza.size,
          count: 1,
        })
      );
      let index = -1;
      if (this.pizza.id == item.id) {
        if (this.pizza.type !== "" && this.pizza.size !== null) {
          this.$store.commit("pizzasCountIncrement", { value: item.id });
          if (this.getBasket.length != 0) {
            index = this.getBasket.findIndex(
              (el) =>
                el.id === item.id &&
                el.type == pizza.type &&
                el.size == pizza.size
            );
          }
          if (index == -1) {
            this.$store.commit("basketPushMethod", { value: pizza });
            notify(pizza.name, pizza.type, pizza.size);
          } else {
            this.$store.commit("basketCountIncrement", { value: index });
            notify(pizza.name, pizza.type, pizza.size);
          }
        }
      }
      this.pizza.count = 1;
    },
    typesMethod(item, typeItem) {
      this.pizza.id = item.id;
      this.pizza.type = typeItem;
      this.pizza.size = null;
    },
    sizeMethod(item, size) {
      if (this.pizza.id == item.id) {
        this.pizza.size = size;
      }
      this.$store.commit("changePriceMethod", { value: [item.id, size] });
    },
  },
  computed: {
    getPizzas() {
      return this.$store.getters.getPizzasMethod;
    },
    getBasket() {
      return this.$store.getters.getBasketMethod;
    },
  },
  mounted() {
    this.getDB();
  },
};
</script>
