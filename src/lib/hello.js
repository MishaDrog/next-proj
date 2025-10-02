

export function getHelloMessage(params) {
    
    return {message: 'Hello, from shared module!'};
}


export function createHelloGreeting(name) {
    
    return { message: ` Hello ${name}, from shared module! ` }
};
