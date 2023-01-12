import { toast } from "react-toastify";
import { Slide } from "react-toastify";

export const successMes = (message, time) => {
    toast["success"](message || "🦄 Wow so easy!", {
        position: "top-right",
        autoClose: time || 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export const ToastError = (message, time) => {
    toast["error"](message || "error", {
        position: "top-right",
        autoClose: time || 1500,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: false,
        closeButton: true,
        transition: Slide,
        progress: undefined,
        closeOnClick: false,
        theme: "light",
    });
};

export const ToastLoading = (message, time) => {
    toast["loading"](message || "loading", {
        position: "top-right",
        autoClose: time || 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const warningMess = (message, time) => {
    toast["warning"](message || "Please fill out the information completely in input fields", {
        position: "top-right",
        autoClose: time || 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}