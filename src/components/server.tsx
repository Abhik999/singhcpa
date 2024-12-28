import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="../images/Web-Mobile.jpg" alt="..." />
        <img src="../images/AI2.jpg" alt="..." />
        <img src="../images/ML.jpg"alt="..." />
        <img src="../images/cloudmig.png" alt="..." />
        <img src="../images/GENAI.png" alt="..." />
      </Carousel>
    </div>
  );
}