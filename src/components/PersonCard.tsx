import { FC } from "react";

interface PersonCardProps {
  name: string;
  imgSrc: string;
  position: string;
  desc: string;
}

export const PersonCard: FC<PersonCardProps> = ({
  name,
  imgSrc,
  position,
  // desc,
}) => {
  return (
    <div className="card image-full w-80 px-2 py-4 bg-cover">
      <figure className="mx-auto h-36">
        <img className="h-40" src={imgSrc} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};
