
import { Testimony } from "../../components";

type Props = {};

const MainTestimony = (props: Props) => { 
  const array = [
    {
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      name: "Paul Garden",
      companyName: "N26",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "I was looking for a junior developer to help me with my startup, and I was really impressed with the selection of developers on Jhire",
      id: 1,
    },    {
      img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: "John Mallini",
      companyName: "HackerOne",
      roleInCompany: "Ethical Hacker",
      linkedinLink: "",
      message: "I would definitely recommend Jhire to anyone looking for a great junior developer.",
      id: 2,
    },    {
      img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      name: "John Doe",
      companyName: "Canonical",
      roleInCompany: "Senior Frontend",
      linkedinLink: "",
      message: "I was able to narrow down my choices based on their skills and experience, and I ended up hiring a developer who was perfect for the job",
      id: 3,
    },
    {
      img: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      name: "Steve Roger",
      companyName: "Cacao App",
      roleInCompany: "IT supervisor",
      linkedinLink: "",
      message: "II was able to find a great junior developer who was a perfect fit for my needs.",
      id: 4,
    },
  
  ];

  return (
    <section className=" flex  w-[100vw]  md:px-8 px-4 pt-16 pb-10 text-white justify-center ">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center">
      <h2 className="font-semibold text-3xl lg:text-4xl 2xl:text-5xl mb-10 w-[90%]   max-w-[900px] text-center self-center text-black ">
    
       <span className="text-primary">Review</span> Of Our Previous Client
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
