import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

const Rating = (props) => {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        {rating >= 1 ? (
          <IoIosStar />
        ) : rating >= 0.5 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <IoIosStar />
        ) : rating >= 1.5 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <IoIosStar />
        ) : rating >= 1.5 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <IoIosStar />
        ) : rating >= 3.5 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <IoIosStar />
        ) : rating >= 45 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
      <span>{numReviews} reviews</span>
    </div>
  );
};

export default Rating;
