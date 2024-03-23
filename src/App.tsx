import reactLogo from "./assets/react.svg";
import tsLogo from "./assets/ts-logo.svg";
import viteLogo from "/vite.svg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileSignature, Github, Heart } from "lucide-react";
import { Terminal } from "lucide-react";
import { useState } from "react";
import SkinRenderer from './components/custom/skinrenderer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="feur">
        <SkinRenderer skinUrl="https://crafatar.com/skins/f44374447fd346e9a53bef602bbb00f4"></SkinRenderer>
    </div>
  );
}

export default App;
