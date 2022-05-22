import c from "./hero-remote-work.module.css";
import Image from "next/image";

const HeroRemoteWork = () => {
  return (
    <section className={c.content}>
      <h1>
        Make <br />
        remote work
      </h1>

      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals and watch productivity soar.
      </p>
      <a>Learn More</a>

      <ul>
        <li>
          <Image src="/images/client-databiz.svg" width={120} height={20} />
        </li>
        <li>
          <Image src="/images/client-audiophile.svg" width={80} height={40} />
        </li>
        <li>
          <Image src="/images/client-meet.svg" width={90} height={20} />
        </li>
        <li>
          <Image src="/images/client-maker.svg" width={90} height={30} />
        </li>
      </ul>
    </section>
  );
};

export default HeroRemoteWork;
