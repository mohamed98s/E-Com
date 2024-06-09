import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "@componants/common";


import styles from "./styles.module.css";
const { container, wrapper } = styles;

export default function MainLayout() {
  return (
    <Container className={container}>
      <Header></Header>
      <div className={wrapper}>
        <Outlet/>
      </div>
      <Footer></Footer>
    </Container>
  );
}
