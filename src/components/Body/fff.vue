<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  methods: {
    notify() {
    //   toast("Default Notification !");

      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });

    //   toast.error("Error Notification !", {
    //     position: toast.POSITION.TOP_LEFT,
    //   });

    //   toast.warn("Warning Notification !", {
    //     position: toast.POSITION.BOTTOM_LEFT,
    //   });

    //   toast.info("Info Notification !", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });

    //   toast("Custom Style Notification with css class!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     className: "foo-bar",
    //   });
    },
  },
};
</script>

<template>
  <div>
    <button @click="notify">Notify !</button>
  </div>
</template>

<style>
.foo-bar {
  color: #f00;
}
</style>
