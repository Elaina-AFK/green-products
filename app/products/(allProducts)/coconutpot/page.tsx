import Image from "next/image";

export default function Product1() {
  return (
    <>
      <section className="w-full">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">
          กระถางกากมะพร้าว
        </h1>
        <figure className="grid place-items-center">
          <Image
            unoptimized
            src={"/coconut pot.png"}
            width={600}
            height={900}
            alt="coconut pot"
            className="rounded-3xl shadow-2xl"
          />
        </figure>
      </section>
      <section className="w-full flex justify-around mt-8 max-md:flex-col gap-y-4">
        <article className="max-w-[25ch]">
          <h2 className="font-semibold font-serif text-2xl">🎨 อุปกรณ์</h2>
          <ul className="list-inside list-['🛠️_'] ml-4">
            <li>หม้อ</li>
            <li>น้ำเปล่า</li>
            <li>กากมะพร้าว</li>
            <li>กรรไกร</li>
            <li>แป้งมันสำปะหลัง</li>
            <li>เตาแก๊ส</li>
            <li>ถุงมือ</li>
            <li>ถุงพลาสติก​สำหรับแม่พิมพ์</li>
            <li>กะละมัง</li>
            <li>กระถาง</li>
          </ul>
        </article>
        <article className="max-w-prose">
          <h2 className="font-semibold font-serif text-2xl">🎉 วิธีทำ</h2>
          <ol className="list-decimal list-inside ml-4">
            <li>เตรียมน้ำในหม้อนำแป้งมันสำปะหลัง​ใส่ลงหม้อ</li>
            <li>ทำการเคี้ยว​แป้งบนเตาแก๊ส​จนกว่าแป้งจะเกาะกลุ่ม</li>
            <li>
              นำกากมะพร้าว​ใส่ลงในกะละมัง​เเละเอาแป้งที่ผ่านการเคี้ยวบนเตามาใส่ผสมกับกากมะพร้าว
            </li>
            <li>
              หลังจากผสมเสร็จ รอ 10
              นาทีให้กากมะพร้าว​เย็นลงระหว่างรอให้ใส่ถุงพลาสติก​ครอบกระถางก่อนจะใส่กากมะพร้าว​ลงในกระถาง
            </li>
            <li>จัดกากมะพร้าว​ให้เข้ารูปกับตัวกระถาง</li>
            <li>นำไปตากแดดเพื่อให้กากมะพร้าวแข็งตัวเเละพร้อมเป็นผลงาน</li>
          </ol>
        </article>
      </section>
      <section className="w-full flex flex-col items-center mt-8 gap-y-2 mx-auto">
        <h2 className="font-semibold font-serif text-2xl">✨ ประโยชน์</h2>
        <p className="text-lg">เป็นของตกเเต่งสไตล์ DIY ของตัวเอง</p>
      </section>
      <section className="w-full flex flex-col gap-y-2 mt-8">
        <h2 className="font-semibold font-serif text-2xl text-center">
          🎥 วิดีโอ
        </h2>
        <iframe
          className="aspect-video w-full h-full max-w-3xl mx-auto"
          width="905"
          height="509"
          src="https://www.youtube.com/embed/MDAsdm787-o"
          title="กระถางกากมะพร้าว"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
