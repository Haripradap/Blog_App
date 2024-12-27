import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"


const SignUp = () => {
  return (
    <div className=" min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto sm: flex-col md:flex-row md:items-center gap-5">
      {/* leftside */}
          <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Hari's </span>
            Blog
        </Link>
        <p className="text-sm mt-5">
          This is my personnel blog that define my workings. you can sign-in and view my works and can provide your own comments on my work
        </p>
          </div>
      {/* rightside */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your Username"/>
                <TextInput
                  type="text"
                  placeholder="Username..."
                  id="username"
                />
              </div>
              <div>
                <Label value="Your Email"/>
                <TextInput
                  type="email"
                  placeholder="name@gmail.com"
                  id="Email"
                />
              </div>
              <div>
                <Label value="Your Password"/>
                <TextInput
                  type="password"
                  placeholder="Password..."
                  id="Password"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className=" flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/sign-in' className=" text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp