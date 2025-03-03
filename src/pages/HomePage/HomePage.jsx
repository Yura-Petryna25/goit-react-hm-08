import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to the Contact Book App</h1>
      <p className={css.text}>Keep all your contacts in one place.</p>
    </div>
  );
};

export default HomePage;
