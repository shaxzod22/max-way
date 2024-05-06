import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../assets/img/aboutmaxway.webp'

const AboutPage = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 border-t-[1px] border-gray-100 pt-4 xl:pt-8'>
       <h1 className='text-[25px] xl:text-[32px] font-semibold mb-5 xl:mb-6'>Kompaniya haqida</h1>
       <img src={AboutImg} className='w-full rounded-xl h-[164px] xl:h-[300px]' alt="max way company" />
       <p className='mt-6 xl:mt-8 max-w-[818px] text-[17px]'>Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud. <br />Taomnoma asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor yo'nalishlarimiz - ingredientlarning yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning takliflariga e'tibor. <br />Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lishda davom etish uchun narx va sifatning mukammal muvozanatini qidiramiz. <br /> Agar siz kutilmaganda biz tomondan yomon xizmat yoki past sifatli pishirilgan taomga duch kelsangiz, bizga <Link className='text-[#51267D]' to={'https://t.me/maxwaymasterfood_bot'}>@maxwaymasterfood_bot</Link> manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu tufayli bizda o'sish uchun maqsad bo'ladi.</p>
    </div>
  )
}

export default AboutPage
