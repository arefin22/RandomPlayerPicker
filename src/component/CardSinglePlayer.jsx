/* eslint-disable react/prop-types */
const CardSinglePlayer = (props) => {
  return (
    <div className="card flex-row-reverse text-slate-900 text-xl bg-white shadow-xl">
      <figure>
        <img
          className="h-[420px] w-[420px] object-cover"
          src={props.image}
          alt={props.name}
        />
      </figure>
      <div className="p-4 text-left w-[500px]">
        <div className="flex flex-col gap-[108px]">
          <div>
            <h2 className="text-4xl font-bold underline">{props.name}</h2>
          </div>
          <div className="font-medium">
            <p className="italic">Designation: {props.designation}</p>
            <p>Office: {props.office}</p>
            <p>Specialty: {props.specialty}</p>
          </div>
          <div className="rounded-xl bg-yellow-400 p-2 w-full">
            <p>
              Base Price:{" "}
              <span className="font-bold text-2xl text-black">
                {props.basePrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSinglePlayer;
