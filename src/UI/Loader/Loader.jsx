import React from 'react';
import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col  ">

      <h1 className="lg:text-4xl text-3xl lg:p-2 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam animate-infinite animate-bounce">
        Evalit
      </h1>
      <div class={styles.wrapper}>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.circle}></div>
        <div class={styles.shadow}></div>
        <div class={styles.shadow}></div>
        <div class={styles.shadow}></div>
      </div>
    </div>
  );
};

export default Loader;
