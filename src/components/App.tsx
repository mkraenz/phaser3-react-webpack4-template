import * as React from "react";
import MyGame from "./Game";

export interface Props {
  compiler: string;
  framework: string;
}
const App = (props: Props) => (
  <>
    <h1>
      Hello from {props.compiler} and {props.framework} with Phaser 3, BAMS!
    </h1>
    <MyGame />
  </>
);

export default App;
