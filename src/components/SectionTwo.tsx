import cn from 'classnames'

import ArticleImageOne from '../assets/component-02/Image-01.jpg'
import ArticleImageTwo from '../assets/component-02/Image-02.jpg'
import ArticleImageThree from '../assets/component-02/Image-03.jpg'

import { SectionProps } from 'types'
import { FC } from 'react'

const articles = [
  {
    key: 'article-1',
    imageSrc: ArticleImageOne,
    title: 'Summer Lunch Menu By Mark Best',
    previewDesc:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
  },
  {
    key: 'article-2',
    imageSrc: ArticleImageTwo,
    title: 'A Traditional Christmas Eve, Mark Best Style',
    previewDesc:
      "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."
  },
  {
    key: 'article-3',
    imageSrc: ArticleImageThree,
    title: 'Taking Taste Further',
    previewDesc:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food."
  }
]

const SectionTwo: FC<SectionProps> = ({ reference, page, activePage }) => {
  return (
    <section
      ref={reference}
      id="section-articles"
      className={cn(
        'section h-screen sm:h-full sm:my-48 px-8 sm:px-0 py-12 sm:py-0 sm:p0',
        {
          visible: activePage >= page
        }
      )}
    >
      <div className="w-full space-y-14 min-[320px]:px-0 sm:px-12 lg:px-0">
        <h1 className="text-center font-open-sans-light text-2xl uppercase text-gray-300 sm:text-4xl">
          All the latest from AEG
        </h1>
        <div className="flex space-x-6 overflow-x-scroll text-center sm:overflow-x-auto sm:text-left">
          {articles.map((post) => {
            return (
              <article
                key={post.key}
                className="w-full flex-none space-y-6 sm:flex-auto"
              >
                <img
                  src={post.imageSrc}
                  className="m-auto w-64 border-b-4 border-b-orchard-red shadow-lg sm:w-auto"
                />
                <div className="w-full space-y-2">
                  <p className=" font-open-sans-semibold text-gray-300">
                    {post.title}
                  </p>
                  <p className="pr-4 font-open-sans-light text-sm leading-relaxed text-gray-500">
                    {post.previewDesc}
                  </p>
                </div>
                <button
                  onClick={() => console.log(post.key)}
                  className="border-b border-b-orchard-red pb-1 font-open-sans-semibold text-sm uppercase text-gray-300 hover:text-gray-100"
                >
                  Read More
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
