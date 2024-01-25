/* eslint-disable react/prop-types */
const CardSinglePlayer = (props) => {
  return (
    <div>
      <div className="card w-96 bg-white mx-auto text-slate-900 shadow-xl">
        <figure>
          <img className="h-96 w-96" src={props.image} alt={props.name} />
        </figure>
        {/* name={selectedPlayer.name} image={selectedPlayer.image} designation={selectedPlayer.designation} office={selectedPlayer.office} specialty={selectedPlayer.speciality} basePrice={selectedPlayer.basePrice}  */}
        <div className="card-body">
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <p>Designation: {props.designation}</p>
          <p>Office: {props.office}</p>
          <p>Specialty: {props.specialty}</p>
          <p>Base Price: {props.basePrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSinglePlayer;
