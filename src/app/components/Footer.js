import Image from "next/image"

export default function Footer() {
    return (
        <Image src="/images/header.jpg" width={2000} height={300} style={{objectFit: "contain"}} alt="RCIC insignia" className="mt-12 w-full"/>
    )
}