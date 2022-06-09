/*eslint-disable*/
import React, { useEffect, useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    setUserRole(localStorage.getItem("userRole"));
  });
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h3 className="font-semibold text-4xl text-blueGray-600">
                Çevrimiçi Eğitim Platformu - Öğrenmenin Yeni Yolu.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Çevrimiçi Eğitim Platformu tamamen ücretsiz eğitime erişim
                imkanı sunan, kullanıcılarının izledikleri videolara yorum
                yaparak sosyal bir çevrede birbirleri ile temas halinde
                kendilerini geliştirmek için hazırlanmış Türkçe içerikli bir
                open-source projedir.
              </p>
              <div className="mt-12">
                {userRole == null && (
                  <a
                    href="http://localhost:3000/auth/RegisterUser"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-teal-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Videolara Göz Atmak İçin Üye Olmalısın.👀👀
                  </a>
                )}
                {userRole != null && (
                  <a
                    href="http://localhost:3000/video/VideoLibrary"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-teal-500 active:bg-teal-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Hadi Videolara Bakalım.👀👀
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-12 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://i2.wp.com/kashmirglacier.com/wp-content/uploads/2020/04/Micro.jpg?fit=1000%2C1000&ssl=1"
          alt="Background"
        ></img>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-500">
                <img
                  alt="IkinciResim"
                  src="https://www.schooleducationgateway.eu/files/png6/structural.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-teal-500 fill-current"
                    ></polygon>
                  </svg>
                  <h5 className="text-xl font-bold text-white">
                    Çevrimiçi Eğitim Platformu ile Öğrenmek Çok Kolay!😃😃😃
                  </h5>
                  <p className="text-md font-light mt-2 text-white">
                    Avantajlarına Gelin Yakından Bakalım.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Önder</h6>
                      <p className="mb-4 text-blueGray-500">
                        Çeşitli öğretmenlerden, çeşitli konulardaki videoları
                        istediğin zaman izleyebilirisin!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Yenilikçi</h6>
                      <p className="mb-4 text-blueGray-500">
                        İster tabletten ister bilgisayardan istersen telefondan,
                        sadece internet bağlantın olması yeterli!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Hızlı</h6>
                      <p className="mb-4 text-blueGray-500">
                        İçerikleri tüketirken donma kasma gibi sorunlar
                        yaşamazsın!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Ücretsiz</h6>
                      <p className="mb-4 text-blueGray-500">
                        Tüm içeriklere herhangi bir ücret ödemeden ücretsiz
                        erişebilirsin!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                İzlediğin Videolara Yorum Yapıp Puan Verebilirsin!
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Bu sayede dersi veren öğretmenin daha verimli içerik üretmesini
                ve tabii ki anlamadığın kısımları öğretmenin ya da dersi izleyen
                diğer öğrenciler yardımı ile öğrenebilirisin.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Etkileşim
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Online
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Yardımlaşma
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Paylaşma
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="IkinciResim"
                  src="https://breadnbeyond.com/wp-content/themes/breadnbeyondv4/images/education_illust_hero.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="IkinciResim"
                  src="https://breadnbeyond.com/wp-content/themes/breadnbeyondv4/images/education_illust_00.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="IkinciResim"
                  src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/29183738/Types-of-Education.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="IkinciResim"
                  src="https://www.educationcorner.com/images/featured-importance-education.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-260-px -left-20-px top-210-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/102571/education.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Hedef Odaklı
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/181848/desk-education.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Mekan Bağımsız
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/269358/lamp-education.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Kolay Erişim
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/51127/education-form.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Ekstra Dokümanlar
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/260525/agenda-education.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Kişisel Gelişim
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://www.svgrepo.com/show/99633/education-chart.svg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        İstikrarlı İlerleme
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Videolara Erişim Sağlamak İçin Kayıt Olman Yeterli!
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Birbirinden çeşitli içerikten yararlanmak için kısa süreliğine
                ücretsiz olan web sitemizden yararlanabilirsin. Hemen şimdi
                kayıt olup deneyebilirsin.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Ücretsiz
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Aktif
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Kullanımı Kolay
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  İhtiyaçları Karşılayan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Videoların Yanında İçeriğin Daha İyi Anlaşılması İçin Hocanın
                  Notları da Bulunuyor!
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Videoları izlemeden önce hocanın yazdığı notları ve açıklamarı
                  okuyarak kendizini videolar için hazırlayabilirisiniz.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                src="https://nces.ed.gov/programs/coe/images/flagship/coe-144ppi.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Fikrimizi Beğendin Mi?</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Fikrimizi beğendiysen ve uygulamayı denemek istiyorsan vakit
                kaybetme ve sen de öğrenmeye başla! Hadi O Zaman Vakit
                Kaybetmeyelim!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="auth/RegisterUser.js"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Kayıt Ol
                </a>
                <a
                  href="auth/Register.js"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <span>Giriş Yap</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
