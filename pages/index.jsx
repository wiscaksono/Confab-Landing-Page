/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import React, { useRef, useState } from "react";
import HeadTitle from "../components/HeadTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="mb-16 wrapper">
        <div className="flex items-end justify-between mb-8">
          <HeadTitle first={`Virtual`} sec={`Conferences`} />
          <p className="text-base text-smoke py-6 px-8">
            Virtual meetings, and conferences, <br /> anyone can share, join or
            host (virtual events).
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
              eius. Eaque sequi, quam distinctio et consequuntur excepturi rerum
              voluptas magni itaque earum veritatis facilis iure quasi natus
              sint nobis ipsum quia molestiae at, pariatur quod. Veritatis
              nostrum vitae iste. Exercitationem error quisquam dignissimos
              laboriosam. Quaerat velit tenetur error aspernatur quae tempore
              assumenda magni provident nam quo nihil dolor ea, eligendi est,
              saepe voluptate quisquam corrupti quidem iusto! Ab quam esse
              repellendus vero, fugit ratione laborum, repudiandae autem minus
              exercitationem dignissimos! Ex similique iure est corrupti? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veniam
              voluptatem consectetur, earum eos nulla maiores, magni quas
              voluptate distinctio voluptatibus architecto ratione cum itaque
              eius. Eaque sequi, quam distinctio et consequuntur excepturi rerum
              voluptas magni itaque earum veritatis facilis iure quasi natus
              sint nobis ipsum quia molestiae at, pariatur quod. Veritatis
              nostrum vitae iste. Exercitationem error quisquam dignissimos
              laboriosam. Quaerat velit tenetur error aspernatur quae tempore
              assumenda magni provident nam quo nihil dolor ea, eligendi est,
              saepe voluptate quisquam corrupti quidem iusto! Ab quam esse
              repellendus vero, fugit ratione laborum, repudiandae autem minus
              exercitationem dignissimos! Ex similique iure est corrupti?
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
              src="/icons/Feature-Sketch-annotation-element-brush-pen-icon-smiley-love.svg"
              width={80}
              height={80}
              alt="Watch Exclusive"
              className="mb-4"
            />
            <h3 className="mb-2">Top Speakers</h3>
            <p className="body-small font-medium text-stromy">
              Anyone can <span className="text-crayola">become a host</span> and
              customize the number of participants.
            </p>
          </div>

          <div className="bg-cloudy rounded-[24px] p-8 flex items-start justify-between flex-col">
            <p className="body-regular font-medium">
              Virtual meetings, and conferences, <br /> anyone can share, join
              or host (virtual events).
            </p>

            <div className="flex items-center justify-center gap-2">
              <button className="button-card body-large bg-black text-white font-semibold pl-6 border border-transparent">
                Get Started
              </button>
              <button className="button-card body-large bg-transparent font-semibold flex items-center justify-center gap-2 border-black border">
                <Image
                  src="/icons/explore.svg"
                  width={16}
                  height={16}
                  alt="Explore"
                />
                <span>Browse</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloudy py-[124px] overflow-hidden">
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-center gap-10">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="flex items-start justify-center gap-10">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </section>

      <section className="wrapper my-20">
        <div className="flex justify-between items-end mb-12">
          <HeadTitle first={`Upcoming`} sec={`Events`} />

          <div className="flex items-center py-6 px-8 gap-6 ">
            <button className="button-card flex items-center gap-2 border-2 border-black">
              <Image
                src="/icons/remove_red_eye.svg"
                width={16}
                height={16}
                alt="View All"
              />
              <span className="body-regular font-semibold">View All</span>
            </button>
            <button className="flex items-center justify-center p-4 rounded-full hover:bg-black">
              <Image
                src="/icons/chevron_left.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
            <button className="flex items-center justify-center bg-black p-4 rounded-full">
              <Image
                src="/icons/chevron_right.svg"
                alt=""
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="w-3/12 px-8 py-6">
            <p className="body-small font-medium text-smoke">
              Virtual meetings,
              <br />
              and conferences, anyone can share,
              <br />
              join or host (virtual events).
            </p>
          </div>

          <Swiper
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={`w-8/12 reset-swiper`}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // spaceBetween={40}
          >
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
            <SwiperSlide>
              <CardEvent />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="bg-cloudy py-[124px]">
        <div className="wrapper">
          <div className="flex items-end justify-between mb-12">
            <HeadTitle first={`Main`} sec={`features`} />

            <div className="w-4/12 py-6 px-8">
              <p className="body-regular font-medium text-smoke">
                Virtual meetings, and conferences, <br /> anyone can share, join
                or host (virtual events).
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <CardFeature title="Become a host" img={`feature-Person`} />
            <CardFeature title="Plan ahead" img={`feature-peep-16`} />
            <CardFeature title="get a link, share." img={`feature-Person-2`} />
          </div>
        </div>
      </section>

      <section className="wrapper my-20">
        <div className="flex justify-between items-center">
          <div className="p-12 w-6/12 flex flex-col gap-8">
            <h2>
              Become an
              <br />
              event <span className="text-opal">speakers</span>
            </h2>
            <p className="body-regular text-stromy">
              [description goes in here] blorem blipsum dolor sit bamat minim
              mollit non deserunt ullamco lorem ipsum bolor sit amat est.
            </p>

            <button className="flex items-center gap-2 button-card border-2 border-black w-max">
              <Image
                src={`/icons/arrow_circle_right_back.svg`}
                alt="arrow"
                width={16}
                height={16}
              />
              <span className="body-regular font-semibold">Get Started</span>
            </button>
          </div>

          <div className="w-6/12 relative">
            <img src="/chara/speakers.svg" alt="" className="w-full h-full" />

            <div className="button-card bg-black flex items-center gap-2 w-max absolute top-[76px] left-[90px]">
              <Image
                src="/icons/emoji_objects.svg"
                width={16}
                height={16}
                alt="categories"
              />
              <p className="body-regular font-semibold text-white">
                My Topic...
              </p>
            </div>

            <div className="button-card bg-black flex items-center gap-2 w-max absolute top-[124px] left-[136px]">
              <Image
                src="/icons/feature-interests.svg"
                width={16}
                height={16}
                alt="categories"
              />
              <p className="body-regular font-semibold text-white">
                Category...
              </p>
            </div>

            <div className="rounded-[16px] bg-white border-2 border-black p-4 absolute bottom-3 right-[70px] flex gap-4 items-start">
              <Image
                src="/chara/oliver.svg"
                width={32}
                height={32}
                alt="Oliver"
              />
              <div>
                <p className="caption text-timber font-semibold mb-0.5">
                  Oliver
                </p>
                <p className="caption font-medium">
                  Great topic and speakers! the
                  <br />
                  fact that this event is free is
                  <br />
                  mind-blowing 💥
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-6/12 relative">
            <img src="/chara/scheduling.svg" alt="" className="w-full h-full" />

            <div className="rounded-[16px] bg-cloudy border-2 border-smoke p-4 absolute bottom-[20px] left-[106px] flex gap-4 items-start">
              <div className="p-2 bg-oyster rounded-full flex items-center justify-center">
                <Image
                  src="/icons/today.svg"
                  width={16}
                  height={16}
                  alt="Oliver"
                />
              </div>
              <div>
                <p className="caption text-timber font-semibold mb-0.5">
                  Reminder
                </p>
                <p className="caption font-medium">
                  You have 2 events coming up...
                </p>
              </div>
            </div>
            <div className="rounded-[16px] bg-cloudy border-2 border-smoke p-4 absolute bottom-[97px] right-[105px] flex gap-4 items-start">
              <div className="p-2 bg-oyster rounded-full flex items-center justify-center">
                <Image
                  src="/icons/today.svg"
                  width={16}
                  height={16}
                  alt="Oliver"
                />
              </div>
              <div>
                <p className="caption text-timber font-semibold mb-0.5">
                  My Schedule
                </p>
                <p className="caption font-medium">My topic for next week...</p>
              </div>
            </div>
          </div>
          <div className="p-12 w-6/12 flex flex-col gap-8">
            <h2>
              Plan Ahead
              <br />
              with <span className="text-mango">Scheduling</span>
            </h2>
            <p className="body-regular text-stromy">
              [description goes in here] blorem blipsum dolor sit bamat minim
              mollit non deserunt ullamco lorem ipsum bolor sit amat est.
            </p>

            <button className="flex items-center gap-2 button-card border-2 border-transparent bg-black w-max text-white">
              <Image
                src={`/icons/feature-arrow_circle_right_white.svg`}
                alt="arrow"
                width={16}
                height={16}
              />
              <span className="body-regular font-semibold">Get Started</span>
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="p-12 w-6/12 flex flex-col gap-8">
            <h2>
              Level up
              <br />
              your <span className="text-crayola">engagement</span>
            </h2>
            <p className="body-regular text-stromy">
              [description goes in here] blorem blipsum dolor sit bamat minim
              mollit non deserunt ullamco lorem ipsum bolor sit amat est.
            </p>

            <button className="flex items-center gap-2 button-card border-2 border-black w-max">
              <Image
                src={`/icons/arrow_circle_right_back.svg`}
                alt="arrow"
                width={16}
                height={16}
              />
              <span className="body-regular font-semibold">Get Started</span>
            </button>
          </div>

          <div className="w-6/12 relative">
            <img src="/chara/engagement.svg" alt="" className="w-full h-full" />

            <div className="absolute flex items-center gap-2 bg-crayola py-1.5 pr-3 pl-2 border-2 border-black top-[60px] left-[132px] animate-pulse rounded-full">
              <Image
                src="/icons/stream.svg"
                width={12}
                height={12}
                alt="Live Stream"
                className="animate-spin"
              />
              <p className="caption font-semibold text-white">LIVE</p>
            </div>

            <div className="p-2 bg-white rounded-full absolute  grid grid-cols-5 gap-2 left-1/2 -translate-x-1/2 border-black border-2 bottom-[50px]">
              <button className="p-2 bg-cloudy rounded-full">
                <img src="/icons/volume_up.svg" alt="" width={12} height={12} />
              </button>
              <button className="p-2 hover:bg-cloudy rounded-full transition-colors">
                <img
                  src="/icons/volume_off.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </button>
              <button className="p-2  hover:bg-cloudy rounded-full transition-colors">
                <img src="/icons/pause.svg" alt="" width={12} height={12} />
              </button>
              <button className="p-2 hover:bg-cloudy rounded-full transition-colors">
                <img src="/icons/subtitles.svg" alt="" width={12} height={12} />
              </button>
              <button className="p-2 hover:bg-cloudy rounded-full transition-colors">
                <img
                  src="/icons/fullscreen.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </button>
            </div>

            <div className="rounded-[16px] bg-white border-2 border-black p-4 absolute top-[109px] left-[96px] flex gap-4 items-start">
              <Image
                src="/chara/layla.svg"
                width={32}
                height={32}
                alt="Oliver"
              />
              <div>
                <p className="caption text-mango font-semibold mb-0.5">Layla</p>
                <p className="caption font-medium">So Inspiring... 💡</p>
              </div>
            </div>
            <div className="rounded-[16px] bg-white border-2 border-black p-4 absolute bottom-[108px] right-[92px] flex gap-4 items-start">
              <Image
                src="/chara/mark.svg"
                width={32}
                height={32}
                alt="Oliver"
              />
              <div>
                <p className="caption text-crayola font-semibold mb-0.5">
                  Mark
                </p>
                <p className="caption font-medium">
                  Today's topic and speakers are 🔥🔥🔥
                </p>
              </div>
            </div>

            <div className="rounded-[16px] bg-white border-2 border-black p-4 absolute bottom-[73px] left-5 flex gap-4 items-start">
              <Image
                src="/chara/oliver.svg"
                width={32}
                height={32}
                alt="Oliver"
              />
              <div>
                <p className="caption text-opal font-semibold mb-0.5">Steven</p>
                <p className="caption font-medium">Need more of this !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloudy py-20">
        <div className="wrapper">
          <div className="flex justify-between items-end mb-16">
            <HeadTitle first="Subscribe" sec="Our Newsletter" />

            <div className="flex gap-6 w-5/12  py-6 px-8 items-center">
              <Image
                src="/icons/speaker.svg"
                width={32}
                height={32}
                alt="Speaker"
              />
              <p className="body-regular font-medium text-stromy">
                Get the latest{" "}
                <span className="font-semibold text-crayola">free</span> event
                conference notification and a reminder of upcoming speakers.
              </p>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-6 w-6/12">
            <input
              type="text"
              className="py-6 px-8 rounded-full bg-transparent border border-smoke body-regular font-medium text-smoke"
              placeholder="Your email address"
            />

            <div className="flex justify-between">
              <div className="p-4 flex gap-4 items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-6 h-6 rounded-lg"
                />
                <p className="caption">
                  I agree with{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and <br />
                  <span className="underline cursor-pointer">
                    Terms of Conditions
                  </span>
                </p>
              </div>

              <button className="button-card py px-8 bg-black flex items-center gap-4">
                <span className="text-white body-large font-semibold">
                  Subscribe
                </span>
                <Image src="/icons/send.svg" width={18.22} height={16} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Cards = () => {
  const name = faker.name.fullName();
  const title = faker.lorem.words();
  const country = faker.address.country();
  const jobTitle = faker.name.jobType();
  const desc = faker.lorem.paragraph();

  return (
    <div className="p-8 bg-white rounded-[32px] w-3/12 flex flex-col justify-between">
      <div className="mb-16">
        <h3 className="mb-4">
          <span className="text-crayola">"</span>
          {title}
          <span className="text-crayola">"</span>
        </h3>
        <p>{desc}</p>
      </div>

      <div className="gap-4 flex items-center">
        <div className="w-12 h-12 overflow-hidden bg-cloudy rounded-2xl border-4 border-cloudy relative">
          <img
            src="/chara/peep-63.svg"
            alt="peep-63"
            className="absolute top-[0.3rem] w-full scale-150"
          />
        </div>
        <div>
          <h5>{name}</h5>
          <p className="body-small font-medium text-smoke">
            {`${jobTitle}, ${country}.`}
          </p>
        </div>
      </div>
    </div>
  );
};

const CardEvent = () => {
  const name = faker.name.fullName();
  const title = faker.lorem.words();
  const country = faker.address.country();
  const jobTitle = faker.name.jobType();
  const desc = faker.lorem.paragraph();
  const day = faker.date.weekday().slice(0, 3);
  const date = faker.date.month();

  return (
    <div className=" p-8 bg-cloudy rounded-[32px] h-[480px] flex flex-col justify-between border-4 hover:border-black border-transparent transition-colors ml-10">
      <div>
        <h3 className="mb-4">{title}</h3>
        <h5 className="text-crayola">
          {day}, {date} 2022
        </h5>
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
            <h5 className="text-stromy">{name}</h5>
            <p className="body-small font-medium text-smoke">{jobTitle}</p>
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
  );
};

const CardFeature = ({ title, img }) => {
  return (
    <div className="p-6 rounded-[32px] bg-transparent hover:bg-white transition-colors w-4/12">
      <img src={`/chara/${img}.svg`} alt="Person" className="mb-6" />
      <div className="">
        <h3 className="mb-2">{title}</h3>
        <p className="body-small font-medium text-stromy">
          Anyone can <span className="text-crayola">become a host</span> and
          customize the number of participants.
        </p>
      </div>
    </div>
  );
};
