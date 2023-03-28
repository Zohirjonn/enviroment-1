import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: [],
    basket: [],
    options: "1",
    signType: 0,
    signUpInputs: [
      {
        id: 1,
        name: "lname",
        type: "text",
        label: "Familiyangizni kiriting",
        placeholder: "Familiya...",
        autocomplete: false,
        // model: ,
      },
      {
        id: 2,
        name: "fname",
        type: "text",
        label: "Ismingizni kiriting",
        placeholder: "Ism...",
        autocomplete: false,
        // model: {fname},
      },
      {
        id: 3,
        name: "email",
        type: "email",
        label: "Emailingizni kiriting",
        placeholder: "Email...",
        autocomplete: true,
        // model: {email},
      },
      {
        id: 4,
        name: "password",
        type: "password",
        label: "Parol yarating",
        placeholder: "Parol...",
        autocomplete: false,
        // model: {password},
      },
    ],
    signInInputs: [
      {
        id: 1,
        name: "email",
        type: "email",
        label: "Emailingizni kiriting",
        placeholder: "Email...",
        autocomplete: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        label: "Parolni kiriting",
        placeholder: "parol...",
        autocomplete: true,
      },
    ],
    users: [],
  },
  getters: {
    getBasketMethod(state) {
      return state.basket;
    },
    getPizzasMethod(state) {
      return state.pizzas;
    },
    getBasketCountCheck(state) {
      let basket = { count: 0, price: 0 };
      state.basket.forEach((item) => {
        basket.count += item.count;
        basket.price += item.price * item.count;
      });

      return basket;
    },
    getOptions(state) {
      return state.options;
    },
    getSignType(state) {
      return state.signType;
    },
    getSignTypeInputs(state) {
      if (state.signType == 1) {
        return state.signInInputs;
      } else if (state.signType == 0) {
        return state.signUpInputs;
      }
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    pizzasCountIncrement(state, payload) {
      return state.pizzas.find((el) => el.id == payload.value).count++;
    },
    basketPushMethod(state, payload) {
      return state.basket.push(payload.value);
    },
    basketCountIncrement(state, payload) {
      return state.basket[payload.value].count++;
    },
    pushPizzasMethod(state, payload) {
      return (state.pizzas = payload.value);
    },
    clearBasketMethod(state) {
      return (state.basket = []);
    },
    basketItemMethod(state, payload) {
      let item = payload.value;
      let type = payload.type;
      let index = state.basket.findIndex(
        (el) => el.id == item.id && el.size == item.size && el.type == item.type
      );
      if (type == "increment") {
        return state.basket[index].count++;
      } else if (type == "decrement") {
        if (state.basket[index].count == 0) {
          return;
        }
        return state.basket[index].count--;
      }
    },
    basketItemDeleteMethod(state, payload) {
      let item = payload.value;
      let res = state.basket.filter(
        (el) => el.id != item.id || el.size != item.size || el.type != item.type
      );
      return (state.basket = res);
    },
    filterPizzas(state, payload) {
      state.options = payload.value;
      console.log(payload, "payload");
      if (payload.value == 1) {
        return state.pizzas.sort((a, b) => a.price - b.price);
      } else if (payload.value == 2) {
        return state.pizzas.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      }
    },
    changePriceMethod(state, payload) {
      let id = payload.value[0];
      let size = payload.value[1];
      let pizzaItem = state.pizzas.find((el) => el.id == id);
      let index = state.pizzas.findIndex((el) => el.id == id);
    },
    changeSingTypeMethod(state, payload) {
      return (state.signType = payload.value);
    },
    newUserPushMethod(state, payload) {
      payload.value.id = state.users.length + 1;
      return state.users.push(payload.value);
    },
    loginUser(state, payload) {
      state.users.findIndex((el) => el.email == payload.value.email);
    },
  },
  action: {},
  modules: {},
});