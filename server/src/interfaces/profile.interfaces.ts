import {Document, Types} from 'mongoose'

interface IProfileExperiences {
  title: string;
  company: string;
  projectLink: string;
  technologies: Types.Array<string>;
  jobDescription: string;
}
interface IUserNetworkLink {
  language: string;
  level: string;
}

interface IUserEducation {
  dateStart: string;
  dateEnd: string;
  degreeName: string;
  schoolName: string;
}

interface IUserCertification {
  dateStart: string;
  dateEnd: string;
  certificationName: string;
  plateformeName: string;
}
export interface IProfile extends Document {
  userId: string;
  isCertified: boolean;
  resume: string;
  category: string;
  networkLink: [string, string, string];
  // rate: number;
  about: string;
  experiences: Types.DocumentArray<IProfileExperiences>;
  hardSkills: Types.Array<string>;
  softSkills: Types.Array<string>;
  languages: Types.DocumentArray<IUserNetworkLink>;
  education: Types.DocumentArray<IUserEducation>;
  certification: Types.DocumentArray<IUserCertification>;
}
