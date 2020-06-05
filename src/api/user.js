import Api from './api'

export default {



     register(newUser) {
        console.log("Hello from register method");
        let answer =  Api.post("register", JSON.stringify(newUser)).
        then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
          });
          console.log(answer);
    }

//       get('https://api.github.com/users/mapbox')
//       .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
}

// const response = await fetch('http://localhost:5000/api/register/', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email: this.email,
//                     password: this.password,
//                     repeatPassword: this.repeatPassword,
//                     name: this.name,
//                     adress: {
//                         street: this.street,
//                         city: this.city,
//                         zip: this.zip
//                     }
//                 })
//             })
//             console.log(response)
//             const data = await response.json()
//             console.log(data)