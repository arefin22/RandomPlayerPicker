/* eslint-disable react/prop-types */
const CardSinglePlayer = (props) => {
  return (
    <div className="card flex-row-reverse text-slate-900 text-xl bg-white shadow-xl">
      <figure>
        <img className="h-80 w-80 object-cover" src={props.image} alt={props.name} />
      </figure>
      <div className="p-4 text-left w-96">
        <h2 className="text-4xl font-bold">{props.name}</h2>
        <p className="italic">Designation: {props.designation}</p>
        <p>Office: {props.office}</p>
        <p>Specialty: {props.specialty}</p>
        <p className="absolute bottom-3 bg-yellow-400 p-2 w-6/12">Base Price: <span className="font-bold text-green-600">{props.basePrice}</span></p>
      </div>
    </div>
  );
};

export default CardSinglePlayer;
