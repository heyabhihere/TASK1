// SignIn.js/pages
export default function SignIn() {
    return (
        <div className="container2">
            <form>
                <div className='details'>
                    <h1>Sign In</h1>
                    <input className='name' type='text' placeholder='Email/Phone number' />
                    <input className='pwd' type='password' placeholder='Password' />
                </div>
                <button className="submit" type="submit">save</button>
                <div className='links'>
                    <a src="" >forget password? </a>
                </div>
            </form>
        </div>
    )
}