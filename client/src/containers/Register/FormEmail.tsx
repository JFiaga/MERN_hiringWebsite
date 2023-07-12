
type UserData = {
  email: string;
};

type UserFormEmail = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const FormEmail = ({ email, updateFields }: UserFormEmail) => {
  return (
  
      <input
        type="email"
        required
        id="email"
        className=" border border-primary p-2"
        value={email}
        onChange={(e) => updateFields({email : e.target.value})}
      />

  );
};

export default FormEmail;
