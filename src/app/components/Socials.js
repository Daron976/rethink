import Image from "next/image";
import text from "../../../public/Shape.png";
import arrow from "../../../public/arrow.svg";
import edit from "../../../public/edit.svg";
import basil from "../../../public/basil.svg";

export default function Socials() {
  return (
    <>
      <div className="mainContentOffers flex">
        <h2>Social media</h2>
        <div className="offerWrapper flex">
          <article className="offer flex">
            <div className="icons flex">
              <Image
                src={edit}
                width={24}
                height={24}
                quality={100}
                alt="pencil Icon"
              />
              <Image
                src={arrow}
                width={24}
                height={24}
                quality={100}
                alt="trend arrow"
              />
            </div>
            <h3>Blog writing</h3>
            <p>
              Generate the best blog post to fit your audience with just few
              clicks of a button
            </p>
          </article>
          <article className="offer flex">
            <div className="icons flex">
              <Image
                src={basil}
                width={24}
                height={24}
                quality={100}
                alt="edit icon"
              />
              <Image
                src={arrow}
                width={24}
                height={24}
                quality={100}
                alt="trend arrow"
              />
            </div>
            <h3>Product description</h3>
            <p>Instantly generate engaging product descriptions that sell</p>
          </article>
          <article className="offer flex">
            <div className="icons flex">
              <Image
                src={text}
                width={24}
                height={24}
                quality={100}
                alt="text icon"
              />
              <Image
                src={arrow}
                width={24}
                height={24}
                quality={100}
                alt="trend arrow"
              />
            </div>
            <h3>Article writer</h3>
            <p>
              Automatically create unique factual articles at the touch of a
              button
            </p>
          </article>
          <article className="offer flex">
            <div className="icons flex">
              <Image
                src={edit}
                width={24}
                height={24}
                quality={100}
                alt="pencil icon"
              />
              <Image
                src={arrow}
                width={24}
                height={24}
                quality={100}
                alt="trend arrow"
              />
            </div>
            <h3>Blog writing</h3>
            <p>
              Generate the best blog post to fit your audience with just few
              clicks of a button
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
