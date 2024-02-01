import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            {/* <User name="Raju(function)"/> */}
            <UserClass name={"Raju(class)"} Location={"Bhimavarm"} />
        </div>
    )
}
export default About;