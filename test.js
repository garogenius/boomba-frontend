
function HttpRequests() {

    this.post = () => {
        return "Hello WOrld";
    }

}

const http = new HttpRequests();

console.log(http.post())