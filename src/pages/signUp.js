// signUp.js /pages

export default function SignUp() {
    return (
        <div className="container3">
        <h1>Sign Up </h1>
            <form className="allDetails">
                <label>Enter your Name:</label>
                <input className="name" type="text" placeholder=" name" />
                <label>Enter your Email:</label>
                <input className="email" type="email" placeholder="email" />
                <label>Enter your contact:</label>
                <input className="contact" type="text" placeholder="your contact" limit="10" />
                <label for="gender">Gender</label>
                <select className="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>
                <label for="DOB">Date of birth</label>
                <input type="date" className="date" />
                <input type="text" className="pw" placeholder="password" />
                <input type="text" className="pw" placeholder="repeat-password" />
                <button type="submit" className="submit" >Save</button>
            </form>
        </div>
    )
}
