import Api from "./api";

export default {
    async register(registrationForm) {
        try {
            let result = await Api.post("register", registrationForm);
            alert(result.data.message);
            console.log(result.status, result.data);
        } catch (error) {
            alert("Registration failed: " + error.response.data.errors);
            console.log(error.response);
        }

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