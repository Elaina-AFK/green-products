import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid h-auto grid-cols-12 gap-y-28 px-8 py-6 max-md:px-1 max-md:flex max-md:flex-col">
      <article className="col-span-6 flex flex-col justify-center max-md:order-2">
        <h2>BCG Model คืออะไร?</h2>
        <p className="max-w-prose">
          เป็นการพัฒนาเศรษฐกิจแบบองค์รวม ที่จะพัฒนาเศรษฐกิจ 3 มิติไปพร้อมกัน
          ได้แก่ เศรษฐกิจชีวภาพ( Bioeconomy) ระบบเศรษฐกิจชีวภาพ
          มุ่งเน้นการใช้ทรัพยากรชีวภาพเพื่อสร้างมูลค่าเพิ่ม
          โดยเน้นการพัฒนาเป็นผลิตภัณฑ์มูลค่าสูง เชื่อมโยงกับ เศรษฐกิจหมุนเวียน
          (Circular Economy) คำนึงถึงการนำวัสดุต่าง ๆ
          กลับมาใช้ประโยชน์ให้มากที่สุด และทั้ง 2 เศรษฐกิจนี้
          อยู่ภายใต้เศรษฐกิจสีเขียว (Green Economy)
          ซึ่งเป็นการพัฒนาเศรษฐกิจที่ไม่ได้มุ่งเน้นเพียงการพัฒนาเศรษฐกิจเท่านั้น
          แต่ต้องพัฒนาควบคู่ไปกับการพัฒนาสังคมและการรักษาสิ่งแวดล้อมได้อย่างสมดุลให้เกิดความมั่นคงและยั่งยืนไปพร้อมกัน
        </p>
      </article>
      <figure className="col-span-5 col-start-8 max-md:order-1">
        <div className="relative w-full aspect-square">
          <Image
            unoptimized
            src="/bcg1.webp"
            alt="BCG Model"
            fill={true}
            className="rounded-3xl shadow-2xl"
            objectFit="cover"
          />
        </div>
        <figcaption className="text-xs text-center">
          source:{" "}
          <em>
            <Link
              target="_blank"
              href={"https://www.thairath.co.th/news/sustainable/2699440"}
              className="inline"
            >
              https://www.thairath.co.th/news/sustainable/2699440
            </Link>
          </em>
        </figcaption>
      </figure>
      <section className="col-span-12 max-md:order-3">
        <h2 className="text-center">ประโยชน์ของ BCG Model</h2>
        <figure>
          <div className="w-full aspect-video relative">
            <Image
              unoptimized
              src={"/bcg2.webp"}
              fill={true}
              objectFit="cover"
              className="rounded-3xl shadow-2xl"
              alt={"ประโยชน์ของ BCG model"}
            />
          </div>

          <figcaption className="text-xs text-center">
            source:{" "}
            <em>
              <Link
                target="_blank"
                href={
                  "https://inno.co.th/bcg-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3/"
                }
              >
                https://inno.co.th/bcg-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3/
              </Link>
            </em>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
