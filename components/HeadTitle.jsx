export default function HeadTitle({ first, sec }) {
  return (
    <div className="flex items-end justify-between ">
      <h1 className="py-4 px-8">
        {first}
        <br /> <span className="text-opal">{sec}</span>
      </h1>
    </div>
  );
}
