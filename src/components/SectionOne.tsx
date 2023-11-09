import imageOne from '../assets/component-01/Image-01.jpg'
import imageTwo from '../assets/component-01/Image-02.jpg'
import imageThree from '../assets/component-01/Image-03.jpg'

const SectionOne = () => {
  return (
    <section id="section-ingredients">
      <div className="flex w-full space-x-6">
        <div className="h-max w-full">
          <img
            src={imageOne}
            className="h-full border border-neutral-900 shadow-lg"
          />
        </div>
        <div className="w-full space-y-4">
          <img src={imageTwo} className="border border-neutral-900 shadow-lg" />
          <img
            src={imageThree}
            className="border border-neutral-900 shadow-lg"
          />
        </div>
        <div className="w-full space-y-10">
          <div className="w-full">
            <h1 className="pb-4 font-open-sans-light text-2xl uppercase text-gray-300">
              Answer your body&apos;s needs
            </h1>
            <hr />
            <p className="pr-1 pt-8 font-open-sans-light font-light leading-relaxed text-gray-400">
              The way ingredients are sourced affects the way we nourish our
              bodies. Author Mark Schatzer believers our body naturally develops
              an appetite for the foods and nutrients it needs to be healthy,
              but that artificial flavourings are getting in the way. This can
              be reversed by focusing on high-quality ingredients and being
              mindful as your appetite guides you to consume according to your
              body&apos;s needs.
            </p>
          </div>
          <div className="w-full space-y-4">
            <p className="font-open-sans-semibold text-sm uppercase text-orchard-red">
              Be Mindful
            </p>
            <p className="font-open-sans-semibold leading-relaxed text-gray-300">
              Sourcing local or organic food is a good way to start being more
              mindful about what you&apos;re cooking and eating.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
