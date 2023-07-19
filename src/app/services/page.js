import Header from "../components/Header"
import Services from "../components/Services"

export const metadata = {
    title: 'Services - BTG',
  }

export default function Page() {
    return (
        <div>
            <Header />
            <Services />
        </div>
      )
}