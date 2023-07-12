

type UserData = {
  name: string;
};
type UserFormName = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const FormName = ({ name, updateFields }: UserFormName) => {
  return (

      <input
        required
        type="text"
        id="name"
        className=" border border-primary p-2"
        value={name}
        onChange={e => updateFields({name:e.target.value})}
      />

  );
};

export default FormName;
