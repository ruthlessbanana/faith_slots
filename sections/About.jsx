'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Zing" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Zing </span> is a new
          Multi-Blockchain Contest Management System solution designed to 
          leverage the strengths of Ethereum, Base, and Solana, providing a robust platform for managing digital contests.{' '}
        <span className="font-extrabold text-white">
          Its cross-platform
        </span>{' '}
          functionality makes it an{' '}
        <span className="font-extrabold text-white">ideal choice</span> for organizations looking to
          engage a broad audience while maintaining high standards of security and transparency.
          Let's{' '}
        <span className="font-extrabold text-white">explore</span> the applications
        of the modern digital interactions by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
