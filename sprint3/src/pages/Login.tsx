


function Login() {

    const password =  314159
    function submit(user, pw){
        if (user ==="hospclin" && pw !== password){

        }
    }

    return (
        <>
        <div>
            <div className="justify-items-center">
                <form className=" m-10 rounded p-5 bg-white border-2 border-neutral-400 flex flex-col max-w-3/4 md:max-w-1/2">
                    <label htmlFor="user">ID Preztech</label>
                    <input 
                        type="text" 
                        id="user" 
                        name="user"
                        placeholder="hospclin"
                        className="border-2 border-neutral-500 rounded"
                    />
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        name="pw" 
                        id="pw" 
                        placeholder="314159"
                        className="border-2 border-neutral-500 rounded"
                    />
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;