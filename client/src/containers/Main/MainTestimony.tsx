import Slider from "infinite-react-carousel";
import { Testimony } from "../../components";
import { uiImg } from "../../assets";

type Props = {};

const MainTestimony = (props: Props) => {
  const array = [
    {
      img: uiImg,
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 1,
    },    {
      img: uiImg,
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 1,
    },    {
      img: uiImg,
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 1,
    },
    {
      img: uiImg,
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 1,
    },
    {
      img: uiImg,
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",

      id: 1,
    },
  ];

  return (
    <section className=" bg-primary/20 text-black w-[100vw] flex  justify-center">
      <div className="max-w-[1400px] w-full flex flex-col  items-center">
        <h2 className="font-semibold text-xl md:text-3xl  max-w-[900px] text-center ">
          Decouvrez les avis de nos clients
        </h2>

        <Slider
          slidesToShow={1}
          arrowScroll={5}
          className={`carousel relative w-full max-w-[1400px]`}
        >
          {array.map((card, index) => (
            <Testimony
              img={card.img}
              name={card.name}
              companyName={card.companyName}
              roleInCompany={card.roleInCompany}
              message={card.message}
            
            />
          ))}
        </Slider>
      </div>
      
    </section>
  );
};

export default MainTestimony;
