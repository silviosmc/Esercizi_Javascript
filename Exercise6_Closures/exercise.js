function printName() {
    helloName = "Hello John";
    let inner = () => {
        console.log(helloName);
    };
    
    inner();
}

printName();