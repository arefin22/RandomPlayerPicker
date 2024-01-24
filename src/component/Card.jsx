/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
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
