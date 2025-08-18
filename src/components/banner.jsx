import Image from "next/image";
import BlurFade from "./ui/blur-fade";

export default function Banner() {
    return (
        <BlurFade className={"w-full"}>
            <Image src={"/assets/banner.png"} width={1000} height={1000} alt="Banner Image" className="w-full max-h-72 object-cover" />
        </BlurFade>
    )
}