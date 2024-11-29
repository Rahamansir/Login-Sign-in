export default interface Fieldprops {
  label: string;
  placeholder?: string;
  type?: string;
}

export default function Field(props:Fieldprops) {
  return (
    <div>
      <label>{props.label}: </label>
      <input type={props.type || Text} placeholder={props.placeholder} />
    </div>
  );
}
