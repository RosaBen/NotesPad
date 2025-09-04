import Showdown from "showdown";

export function NoteDisplay() {
  const converter = new Showdown.Converter();
  return (
    <>
      <h2>Ma premiere note</h2>
    </>
  );
}