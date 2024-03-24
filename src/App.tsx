import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowBigUp, ArrowBigLeft } from "lucide-react";
import { useState } from 'react';
import MinecraftSkin from "./MinecraftSkin";
import { saveVote } from "./InteractData";
import facebookLogo from './facebook-logo.png';
import telegramLogo from './telegram-logo.png';
import TwitterLogo from './twitter-logo.jpg';

function App() {
  const [username, setUsername] = useState('MartinDev');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(document.getElementById('username')?.value);
  };

  const handleBack = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername('');
  };
  const handleVote = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveVote(username, new Date().toDateString());
    event.target.innerHTML = 'Vote added!';
    event.target.disabled = true;
  };
  const shareOnFacebook = () => {
    const quoteText = "Check out this awesome content on Example.com!";
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodeURIComponent(quoteText)}`;
    window.open(facebookShareUrl, "_blank");
  };
  const shareOnTelegram = () => {
    const telegramShareUrl = "https://t.me/share/url?url=https://example.com&text=Check%20out%20this%20awesome%20content!";
    window.open(telegramShareUrl, "_blank");
  };
  const shareOnTwitter = () => {
    const tweetText = "Check out this awesome content!";
    const tweetUrl = "https://my_memMC.com";
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(tweetUrl)}`;
    window.open(twitterShareUrl, "_blank");
  };

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
          {username != '' &&
          <>
          <CardHeader>
            <CardTitle>{username}</CardTitle>
            <CardDescription className="flex justify-between">
              <p>
              You can vote for this skin!
              </p>
              <Button onClick={handleBack}>
              <ArrowBigLeft className="mr-2 h-4 w-4"/>
               Back
    </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:w-[480px] md:min-w-[480px]">
              <div className="flex-1 space-y-1">
                <MinecraftSkin skinUrl={`https://mineskin.eu/skin/${username}`}></MinecraftSkin>
                <Button onClick={handleVote}>
                <ArrowBigUp className="mr-2 h-4 w-4" /> Vote for this skin
    </Button>
              </div>
          </CardContent>
          </>
      }
      {username == '' &&
      <>
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
                        <Input type="text" placeholder="Username" id="username" />
                        <Button type="submit" onClick={handleChange}>Enter</Button>
                      </div>
                    </p>
                  </div>
                </div>
            </CardContent>
            </>
            }
          </Card>
          <div className="mt-6 flex justify-center space-x-4">
            <Button type="button" onClick={shareOnFacebook} className="bg-transparent border-none p-0 hover:bg-transparent hover:border-none">
              <img src={facebookLogo} alt="Share on Facebook" className="h-8 w-8"/>
            </Button>
            <Button type="button" onClick={shareOnTelegram} className="bg-transparent border-none p-0 hover:bg-transparent hover:border-none">
              <img src={telegramLogo} alt="Share on Telegram" className="h-8 w-8"/>
            </Button>
            <Button type="button" onClick={shareOnTwitter} className="bg-transparent border-none p-0 hover:bg-transparent hover:border-none">
              <img src={TwitterLogo} alt="Share on Twitter" className="h-8 w-8"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
