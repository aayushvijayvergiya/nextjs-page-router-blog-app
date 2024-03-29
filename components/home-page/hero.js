import Image from 'next/image';

import classes from '@/styles/hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/avatar.jpg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Aayush</h1>
      <p>
        I blog about web development - especially about JavaScript and React.
      </p>
    </section>
  );
}

export default Hero;
