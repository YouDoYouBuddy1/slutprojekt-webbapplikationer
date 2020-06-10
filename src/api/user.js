import Api from "./api";

export default {
    registerUser(registration) {
        console.log("user.js")
        return Api.post("register", registration);
    },

    login(loginData) {
        return Api.post("auth", loginData);
    },

    // Alternatively written:
    //   login(email, password) {
    //     return Api({
    //       method: "post",
    //       url: "/auth",
    //       data: {
    //         email: email,
    //         password: password,
    //       },
    //     });
    //   },
}