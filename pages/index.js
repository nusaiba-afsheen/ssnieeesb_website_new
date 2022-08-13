/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/utilities/header";
import Intro from "../components/home/intro";
import About from "../components/home/about";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <About></About>
    </div>
  );
}
