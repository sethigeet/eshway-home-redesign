import { FC } from "react";

export interface PersonCardProps {
  name: string;
  imgSrc: string;
  position: string;
}

export const PersonCard: FC<PersonCardProps> = ({ name, imgSrc, position }) => {
  return (
    <div className="card image-full w-80 h-96 px-2 py-4 bg-cover hover:before:bg-primary/10 before:transition-colors hover:scale-105 transition-transform">
      <figure className="mx-auto">
        <img src={imgSrc} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
};
