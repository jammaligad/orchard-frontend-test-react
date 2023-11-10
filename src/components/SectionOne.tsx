import cn from 'classnames'

import imageOne from '../assets/component-01/Image-01.jpg'
import imageTwo from '../assets/component-01/Image-02.jpg'
import imageThree from '../assets/component-01/Image-03.jpg'

import { PageProps, SectionProps } from 'types'
import { FC } from 'react'

const PageOne: FC<PageProps> = ({ reference, handleImageClick }) => {
  return (
    <div
      ref={reference}
      className="relative h-full w-full text-center sm:hidden"
    >
      <div className="section-one-images w-full">
        <div className="relative w-full">
          <img
            src={imageOne}
            onClick={() => handleImageClick && handleImageClick('image-1')}
            className="relative z-10 mx-auto shadow-lg min-[320px]:top-14 min-[320px]:w-36 min-[380px]:top-32 min-[380px]:w-40"
          />
        </div>
      </div>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="section-one-description w-full p-8">
        <h1 className="whitespace-nowrap pb-4 text-center text-xl uppercase text-gray-300 shadow-xl">
          Answer your body&apos;s needs
        </h1>
        <hr />
        <div className="space-y-4 pt-4 font-open-sans-light font-light leading-relaxed text-gray-400 min-[380px]:text-xl">
          <p>
            The way ingredients are sourced affects the way we nourish our
            bodies.
          </p>
          <p>
            Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way.
          </p>
        </div>
      </div>
    </div>
  )
}

const PageTwo: FC<PageProps> = ({ reference, handleImageClick }) => {
  return (
    <div ref={reference} className="relative h-full w-full py-8 sm:hidden">
      <div className="w-full p-8 text-center">
        <p className="font-open-sans-light font-light leading-relaxed text-gray-400 min-[380px]:text-xl">
          This can be reversed by focusing on high-quality ingredients and being
          mindful as your appetite guides you to consume according to your
          body&apos;s needs.
        </p>
      </div>
      <div className="relative flex h-72 w-full space-x-4 p-4">
        <img
          src={imageTwo}
          className="absolute left-10 h-36"
          onClick={() => handleImageClick && handleImageClick('image-2')}
        />
        <img
          src={imageThree}
          className="absolute right-10 top-32 h-36"
          onClick={() => handleImageClick && handleImageClick('image-3')}
        />
      </div>
      <div className="w-full space-y-4 p-8 text-center ">
        <p className="font-open-sans-semibold text-sm uppercase text-orchard-red">
          Be Mindful
        </p>
        <p className="font-open-sans-semibold leading-relaxed text-gray-300 min-[380px]:text-xl">
          Sourcing local or organic food is a good way to start being more
          mindful about what you&apos;re cooking and eating.
        </p>
      </div>
    </div>
  )
}

const SectionOne: FC<SectionProps> = ({
  activePage,
  reference,
  page,
  handleImageClick
}) => {
  return (
    <section
      id="section-ingredients"
      className={cn('section h-screen sm:h-full', {
        visible: activePage >= page
      })}
    >
      {page === 1 && (
        <>
          <div className="hidden w-full space-x-6 sm:relative sm:flex sm:p-8 lg:p-0">
            <div className="h-max w-full">
              <img
                src={imageOne}
                onClick={() => handleImageClick && handleImageClick('image-1')}
                className="h-full border border-neutral-900 shadow-lg hover:cursor-pointer"
              />
            </div>
            <div className="w-full space-y-4">
              <img
                src={imageTwo}
                onClick={() => handleImageClick && handleImageClick('image-2')}
                className="border border-neutral-900 shadow-lg hover:cursor-pointer"
              />
              <img
                src={imageThree}
                onClick={() => handleImageClick && handleImageClick('image-3')}
                className="border border-neutral-900 shadow-lg hover:cursor-pointer"
              />
            </div>
            <div className="w-full space-y-10 sm:hidden lg:block">
              <div className="w-full">
                <h1 className="pb-4 font-open-sans-light text-2xl uppercase text-gray-300">
                  Answer your body&apos;s needs
                </h1>
                <hr />
                <p className="pr-1 pt-8 font-open-sans-light font-light leading-relaxed text-gray-400">
                  The way ingredients are sourced affects the way we nourish our
                  bodies. Author Mark Schatzer believes our body naturally
                  develops an appetite for the foods and nutrients it needs to
                  be healthy, but that artificial flavourings are getting in the
                  way. This can be reversed by focusing on high-quality
                  ingredients and being mindful as your appetite guides you to
                  consume according to your body&apos;s needs.
                </p>
              </div>
              <div className="w-full space-y-4">
                <p className="font-open-sans-semibold text-sm uppercase text-orchard-red">
                  Be Mindful
                </p>
                <p className="font-open-sans-semibold leading-relaxed text-gray-300">
                  Sourcing local or organic food is a good way to start being
                  more mindful about what you&apos;re cooking and eating.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full space-y-8 px-12 min-[320px]:hidden sm:block lg:hidden">
            <div className="w-full  text-center">
              <h1 className="pb-4 font-open-sans-light text-2xl uppercase text-gray-300">
                Answer your body&apos;s needs
              </h1>
              <hr />
              <p className="pr-1 pt-8 font-open-sans-light text-lg font-light leading-relaxed text-gray-400">
                The way ingredients are sourced affects the way we nourish our
                bodies. Author Mark Schatzer believes our body naturally
                develops an appetite for the foods and nutrients it needs to be
                healthy, but that artificial flavourings are getting in the way.
                This can be reversed by focusing on high-quality ingredients and
                being mindful as your appetite guides you to consume according
                to your body&apos;s needs.
              </p>
            </div>
            <div className="w-full space-y-4 text-center">
              <p className="font-open-sans-semibold text-lg uppercase text-orchard-red">
                Be Mindful
              </p>
              <p className="font-open-sans-semibold text-lg leading-relaxed text-gray-300">
                Sourcing local or organic food is a good way to start being more
                mindful about what you&apos;re cooking and eating.
              </p>
            </div>
          </div>
        </>
      )}
      {page === 1 && <PageOne reference={reference} />}
      {page === 2 && <PageTwo reference={reference} />}
    </section>
  )
}

export default SectionOne
