function printName() {
    helloName = "Hello John";
    let inner = () => {
        setTimeout(function() {
            console.log(helloName);}, 1000)  
    };

    inner();
}

printName();