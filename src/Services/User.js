import { Connector } from '../Connectors/Axios'

class UserService { 
    Login = user => {
        return Connector({
            url:"/users/login",
            method:"POST",
            data:user
        })
    }
}

export default new UserService()