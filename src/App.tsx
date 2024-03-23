import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function App() {

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-200">
      <div className="w-full bg-black py-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          My_NameMC
        </h1>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="w-[480px]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Search</CardTitle>
              <CardDescription>
                Put a minecraft pseudo to find your skin
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:w-[480px] md:min-w-[480px]">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
