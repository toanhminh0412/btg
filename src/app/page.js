import AboutMe from "./components/AboutMe"
import Header from "./components/Header"
import Services from "./components/Services"

export const metadata = {
  title: 'Home - BTG',
}

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Services />
    </div>
  )
}
