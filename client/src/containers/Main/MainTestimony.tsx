import Slider from "infinite-react-carousel";


type Props = {}

const MainTestimony = (props: Props) => {
  return (
    <div>

<Slider
          slidesToShow={5}
          arrowScroll={5}
          className={`carousel relative w-full max-w-[1400px]`}
        >
          {/* {cardDesc.map((card, index) => (
            <CardPopular
              key={index}
              title={card.title}
              desc={card.desc}
              link={"/gigs?category=backend"}
              img={card.img}
            />
          ))} */}
        </Slider>
    </div>
  )
}

export default MainTestimony