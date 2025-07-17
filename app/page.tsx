import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full aspect-[8/5] max-h-[95vh] max-w-[2160px] mx-auto">
        <Image
          src="/Home.jpg"
          alt="Couple holding hands together in front of a big tree"
          width={2160}
          height={1350}
          className="w-full max-h-[95vh] object-cover"
          style={{ objectPosition: "50% 60%" }}
          priority
        />
      </div>
      {/* Rest of your page content */}
    </>
  );
}
