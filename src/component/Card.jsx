/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <div className="max-h-24 flex items-center justify-center rounded-lg bg-white shadow-xl">
        <div className="max-w-14 max-h-24 px-1">
          <figure>
            <img
            className="rounded-lg"
              src={props.image}
              alt={props.name}
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
