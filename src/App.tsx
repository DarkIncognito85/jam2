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
import { Input } from "@/components/ui/input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-6 p-4 relative">
      <div className="flex items-center justify-end w-[90%] absolute top-10">
        <a
          href="https://github.com/angelitolm/shadcn-ui-react-template"
          target="_blank"
          className="inline-flex gap-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
        >
        </a>
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5x1 text-left">
        My_NameMC
      </h1>

      <Alert className="w-[380px] md:w-[480px] 2xl:w-[480px]">
        <Terminal className="h-4 w-4" />
      </Alert>

      <div className="w-[380px] md:w-[480px] md:min-w-[480px]">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Search</CardTitle>
            <CardDescription>
              Put a minecraft nickname to find your skin
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:w-[480px] md:min-w-[480px]">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <FileSignature />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Username</p>
                <div className="text-sm text-muted-foreground">
                  <p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input type="username" placeholder="Username" />
                      <Button type="submit">Enter</Button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
