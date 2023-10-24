import { FC } from "react";

interface ServiceCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  desc,
}) => {
  return (
    <div className="card w-80 bg-primary/10 px-2 py-4">
      <figure className="mx-auto">
        <img className="h-36" src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};
