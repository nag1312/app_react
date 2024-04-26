import Image from "next/image";

export default function page() {
    return (
        <main>
        <div>
        <Image src="/image.png"
         width = {500}
         height = {500}
         alt = "alt"></Image></div>
        <div>
            <p>blablabla</p>
        </div>
        </main>
    );
}