export class UserModel {
    constructor(public username= ' ', public password=' ') //mock login data for testing, will be removed when backend is implemented
     
    
    static login(username: string, password: string) {
        return fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json()
        )
         
    
    }
}