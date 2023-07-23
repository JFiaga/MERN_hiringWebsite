
import { Testimony } from "../../components";

type Props = {};

const MainTestimony = (props: Props) => { 
  const array = [
    {
      img: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 1,
    },    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 2,
    },    {
      img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 3,
    },
    {
      img: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: "John Doe",
      companyName: "Total",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "lorem ipsum dolor sit amet conceptu",
      id: 4,
    },
  
  ];

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center">
      <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   max-w-[900px] text-center self-center text-black ">
    
      Popular <span className="text-primary">Services</span>
        </h2>

      
         <div className="flex flex-col sm:flex-row flex-wrap w-full   justify-center">
       
         {array.map((card, index) => (
            <Testimony
              img={card.img}
              name={card.name}
              companyName={card.companyName}
              roleInCompany={card.roleInCompany}
              message={card.message}
            
            />
          ))}
         </div>
       
      </div>
    </section>

      
 
  );
};

export default MainTestimony;
