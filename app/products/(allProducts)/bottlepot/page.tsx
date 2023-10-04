import Image from "next/image";
import Link from "next/link";

export default function Product1() {
  return (
    <>
      <section className="w-full">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">
          กระถางขวด
        </h1>
        <figure className="grid place-items-center">
          <Image
            src={"/กระถางขวด.png"}
            width={600}
            height={900}
            alt="Bottle Pot"
            className="rounded-3xl shadow-2xl"
          />
        </figure>
      </section>
      <section className="w-full flex justify-around mt-8 max-md:flex-col gap-y-4">
        <article className="max-w-[25ch]">
          <h2 className="font-semibold font-serif text-2xl">🎨 อุปกรณ์</h2>
          <ul className="list-inside list-['🛠️_'] ml-4">
            <li>ขวดน้ำ</li>
            <li>ปุ๋ย</li>
            <li>กรรไกร</li>
            <li>ไม้ประดับ</li>
          </ul>
        </article>
        <article className="max-w-prose">
          <h2 className="font-semibold font-serif text-2xl">🎉 วิธีทำ</h2>
          <ol className="list-decimal list-inside ml-4">
            <li>
              นำขวดน้ำเปล่าที่ไม่ใช้เเล้วมาตัดตรงตัวขวดให้เป็นช่องตรงกลางขวด
            </li>
            <li>นำปุ๋ยมาใส่ขวดพร้อมเกลี่ยให้หน้าเท่ากัน</li>
            <li>นำไม้ประดับมาใส่พร้อมกับจัดทรงให้เรียบร้อย</li>
          </ol>
        </article>
      </section>
      <section className="w-full flex flex-col items-center mt-8 gap-y-2 mx-auto">
        <h2 className="font-semibold font-serif text-2xl">✨ ประโยชน์</h2>
        <p className="text-lg">
          นำขวดมารีไซเคิ้ลเเละเพิ่มพื้นที่สวนขนาดย่อมๆบวกกับเป็นงานอดิเรกสำหรับสาย
          DIY ที่รักธรรมชาติ
        </p>
      </section>
      <section className="w-full flex flex-col gap-y-2 mt-8">
        <h2 className="font-semibold font-serif text-2xl text-center">
          🎥 วิดีโอ
        </h2>
        <iframe
          className="aspect-video w-full max-w-3xl mx-auto"
          src="https://www.youtube.com/embed/MLvnnD7QNR0"
          title="กระถางขวด"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
