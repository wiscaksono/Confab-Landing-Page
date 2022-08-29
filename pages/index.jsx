import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <section className="mb-16 wrapper">
          <div className="flex items-end justify-between mb-8">
            <h1 className="py-4 px-8">
              Virtual <br /> <span className="text-opal">Conferenses</span>
            </h1>
            <p className="text-base text-smoke py-6 px-8">
              Virtual meetings, and conferences, <br /> anyone can share, join
              or host (virtual events).
            </p>
          </div>

          <div className="p-8 bg-header bg-cover bg-no-repeat flex items-end justify-between rounded-[32px] relative ">
            <div className="absolute flex items-center justify-center w-[180px] h-[180px] bg-crayola rounded-full text-white -top-20 right-[440px] -rotate-12">
              <h4>new!!!</h4>
            </div>

            <div className="p-8 bg-white rounded-[32px] flex flex-col justify-between gap-[102px]">
              <div>
                <h3 className="mb-4">
                  make a unique
                  <br />
                  illustration design
                  <br />
                  character
                </h3>
                <h5 className="text-crayola">thu, 19 may 2022</h5>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <Image
                    src="/pablo.png"
                    alt="Pablo Stanley"
                    width={48}
                    height={48}
                    className="rounded-2xl border-cloudy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-stromy">Pablo Stanley</h5>
                    <p className="body-small font-medium text-smoke">
                      Art Director & Illustrator
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center justify-center gap-2 button-card">
                <Image
                  src="/icons/notifications.svg"
                  width={16}
                  height={16}
                  alt="Notification"
                />
                <span className="body-small font-semibold">Remind me</span>
              </button>
              <button className="flex items-center justify-center gap-2 button-card">
                <Image
                  src="/icons/groups.svg"
                  width={16}
                  height={16}
                  alt="Notification"
                />
                <span className="body-small font-semibold">
                  <span className="text-crayola">32</span>
                  /128 participants
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="bg-cloudy">
          <div className="wrapper pt-16 pb-8 flex flex-col gap-2">
            <div className="flex justify-between p-6">
              <img src="/icons/forbes.svg" alt="Forbes" />
              <img src="/icons/fortune.svg" alt="Fortune" />
              <img src="/icons/tc.svg" alt="TC" />
              <img src="/icons/wsj.svg" alt="WSJ" />
              <img src="/icons/ft.svg" alt="Financial Times" />
              <img src="/icons/cnbc.svg" alt="CNBC" />
            </div>

            <div className="py-6">
              <p className="body-small font-medium text-smoke text-center">
                Used by over <span className="text-crayola">50+ million</span>{" "}
                users worldwide <br /> and trusted by top-tier companies.
              </p>
            </div>
          </div>
        </section>

        <section className="wrapper my-20 ">
          <div className="flex items-center justify-center p-6 bg-cloudy rounded-[32px] gap-4 mb-12">
            <div className="w-8/12 bg-seafoam border-8 border-black rounded-[32px] overflow-hidden relative">
              <div className="absolute flex items-center gap-2 bg-crayola button-card border-4 border-black top-3 left-3 animate-pulse">
                <Image
                  src="/icons/stream.svg"
                  width={16}
                  height={16}
                  alt="Live Stream"
                  className="animate-spin"
                />
                <p className="body-regular font-semibold text-white">LIVE</p>
              </div>

              <img src="/live.png" alt="" className="w-full h-full" />

              <div className="p-2 bg-white rounded-full absolute bottom-3 grid grid-cols-5 gap-2 left-1/2 -translate-x-1/2">
                <button className="p-4 bg-cloudy rounded-full">
                  <img src="/icons/volume_up.svg" alt="" />
                </button>
                <button className="p-4 hover:bg-cloudy rounded-full transition-colors">
                  <img src="/icons/volume_off.svg" alt="" />
                </button>
                <button className="p-4  hover:bg-cloudy rounded-full transition-colors">
                  <img src="/icons/pause.svg" alt="" />
                </button>
                <button className="p-4 hover:bg-cloudy rounded-full transition-colors">
                  <img src="/icons/subtitles.svg" alt="" />
                </button>
                <button className="p-4 hover:bg-cloudy rounded-full transition-colors">
                  <img src="/icons/fullscreen.svg" alt="" />
                </button>
              </div>
            </div>

            <div className="w-4/12 bg-white p-6 overflow-hidden rounded-[32px] h-[589px] flex flex-col justify-between white-gradient relative">
              <div className="flex items-center justify-between mb-4">
                <button className="button-card bg-black text-white flex items-center gap-2">
                  <img src="" alt="" />
                  <Image
                    src="/icons/whatshot.svg"
                    width={16}
                    height={16}
                    alt="Live Chat"
                  />
                  <span className="body-small font-semibold">Live Chat</span>
                </button>

                <button className="button-card flex items-center gap-2 text-smoke">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clipRule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                  <span className="body-small font-semibold">
                    Live Chat (128)
                  </span>
                </button>

                <button className="p-2 bg-black rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/settings.svg"
                    width={16}
                    height={16}
                    alt="Settings"
                  />
                </button>
              </div>

              <div className=" overflow-y-auto scrollbar-thin ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                voluptatem consectetur, earum eos nulla maiores, magni quas
                voluptate distinctio voluptatibus architecto ratione cum itaque
                eius. Eaque sequi, quam distinctio et consequuntur excepturi
                rerum voluptas magni itaque earum veritatis facilis iure quasi
                natus sint nobis ipsum quia molestiae at, pariatur quod.
                Veritatis nostrum vitae iste. Exercitationem error quisquam
                dignissimos laboriosam. Quaerat velit tenetur error aspernatur
                quae tempore assumenda magni provident nam quo nihil dolor ea,
                eligendi est, saepe voluptate quisquam corrupti quidem iusto! Ab
                quam esse repellendus vero, fugit ratione laborum, repudiandae
                autem minus exercitationem dignissimos! Ex similique iure est
                corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Veniam voluptatem consectetur, earum eos nulla maiores,
                magni quas voluptate distinctio voluptatibus architecto ratione
                cum itaque eius. Eaque sequi, quam distinctio et consequuntur
                excepturi rerum voluptas magni itaque earum veritatis facilis
                iure quasi natus sint nobis ipsum quia molestiae at, pariatur
                quod. Veritatis nostrum vitae iste. Exercitationem error
                quisquam dignissimos laboriosam. Quaerat velit tenetur error
                aspernatur quae tempore assumenda magni provident nam quo nihil
                dolor ea, eligendi est, saepe voluptate quisquam corrupti quidem
                iusto! Ab quam esse repellendus vero, fugit ratione laborum,
                repudiandae autem minus exercitationem dignissimos! Ex similique
                iure est corrupti?
              </div>

              <div className="relative h-max mt-2">
                <button className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
                  <Image
                    src="/icons/emoji_emotions.svg"
                    width={16}
                    height={16}
                    alt="Emoji"
                  />
                </button>
                <input
                  type="text"
                  className="bg-cloudy w-full caption font-medium text-smoke py-4 pl-12 pr-[60px] rounded-full focus-within:border-none transition-colors relative"
                  placeholder="Say something..."
                />
                <button className="absolute bg-black top-1/2 -translate-y-1/2 right-2 z-50 flex items-center justify-center py-2.5 px-4 rounded-full">
                  <Image
                    src="/icons/send.svg"
                    width={16}
                    height={16}
                    alt="Send"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="p-6 flex flex-col items-start">
              <Image
                src="/icons/Sketch-annotation-element-brush-pen-icon-eye.svg"
                width={80}
                height={80}
                alt="Watch Exclusive"
                className="mb-4"
              />
              <h3 className="mb-2">Watch Exclusive</h3>
              <p className="body-small font-medium text-stromy">
                Free and <span className="text-crayola">exclusive event</span>{" "}
                conferences with special guest and speakers.
              </p>
            </div>

            <div className="p-6 flex flex-col items-start">
              <Image
                src="/icons/Sketch-annotation-element-brush-pen-icon-eye.svg"
                width={80}
                height={80}
                alt="Watch Exclusive"
                className="mb-4"
              />
              <h3 className="mb-2">Watch Exclusive</h3>
              <p className="body-small font-medium text-stromy">
                Free and <span className="text-crayola">exclusive event</span>{" "}
                conferences with special guest and speakers.
              </p>
            </div>
            <div className="p-6 flex flex-col items-start">
              <Image
                src="/icons/Sketch-annotation-element-brush-pen-icon-eye.svg"
                width={80}
                height={80}
                alt="Watch Exclusive"
                className="mb-4"
              />
              <h3 className="mb-2">Watch Exclusive</h3>
              <p className="body-small font-medium text-stromy">
                Free and <span className="text-crayola">exclusive event</span>{" "}
                conferences with special guest and speakers.
              </p>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
