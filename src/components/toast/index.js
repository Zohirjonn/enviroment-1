import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export function notify(name, type, size) {
  return toast.success(
    [name + " | ", "" + type, " " + size + "-см", " +1 шт."],
    {
      position: toast.POSITION.TOP_RIGHT,
      rtl: false,
      autoClose: 600,
      limit: 3,
    }
  );
}
