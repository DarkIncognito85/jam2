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
import { useEffect, useState } from 'react';
import MinecraftSkin from "./MinecraftSkin";
import { getLeaderboard, saveVote } from "./InteractData";
import facebookLogo from './facebook-logo.png';
import telegramLogo from './telegram-logo.png';
import TwitterLogo from './twitter-logo.jpg';
import ClientxcmsLogo from './clientxcms-logo.png';

function App() {
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([] as Array<{ username: string; votes: number; lastVoteDate: string }>);
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
    const quoteText = "Check out my skin!";
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://mynamemc.clientxcms.com&quote=${encodeURIComponent(quoteText)}`;
    window.open(facebookShareUrl, "_blank");
  };
  const shareOnTelegram = () => {
    const telegramShareUrl = `https://t.me/share/url?url=https://mynamemc.clientxcms.com&text=${encodeURIComponent('Check out my skin!')}!`;
    window.open(telegramShareUrl, "_blank");
  };
  const shareOnTwitter = () => {
    const tweetText = "Check out my skin!";
    const tweetUrl = "https://mynamemc.clientxcms.com";
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(tweetUrl)}`;
    window.open(twitterShareUrl, "_blank");
  };
  const shareOnClientxcsm = () => {
    const clientxcmsShareUrl = 'https://mynamemc.clientxcms.com/';
    window.open(clientxcmsShareUrl, "_blank");
  }
  useEffect(() => {
    getLeaderboard().then((data) => {
      setLeaderboard(data);
    });
  });
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

          </div>
          </div>

          <div>
      {leaderboard.length == 3 &&

        <div className="flex-1 flex justify-center items-center gap-4">
            
            <Card style={{marginTop: "60px"}}>
              <CardHeader>
                <CardTitle>Top Skin #2</CardTitle>
                <CardDescription>
                {leaderboard[1].username} with {leaderboard[1].votes} votes (last vote on {leaderboard[1].lastVoteDate})

                </CardDescription>
              </CardHeader>
              <CardContent>
                  <MinecraftSkin skinUrl={`https://mineskin.eu/skin/${leaderboard[1].username}`}></MinecraftSkin>
            </CardContent>
            </Card>
            <Card style={{marginTop: "-20px"}}>
              <CardHeader>
                <CardTitle>Top Skin #1</CardTitle>
                <CardDescription>
                  {leaderboard[0].username} with {leaderboard[0].votes} votes (last vote on {leaderboard[1].lastVoteDate})
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <MinecraftSkin skinUrl={`https://mineskin.eu/skin/${leaderboard[0].username}`}></MinecraftSkin>
            </CardContent>
            </Card>
            <Card style={{marginTop: "30px"}}>
              <CardHeader>
                <CardTitle>Top Skin #3</CardTitle>
                <CardDescription>
                {leaderboard[2].username} with {leaderboard[2].votes} votes (last vote on {leaderboard[2].lastVoteDate})

                </CardDescription>
              </CardHeader>
              <CardContent>
                  <MinecraftSkin skinUrl={`https://mineskin.eu/skin/${leaderboard[2].username}`}></MinecraftSkin>
            </CardContent>
            </Card>
            </div>
      })

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
            <Button type="button" onClick={shareOnClientxcsm} className="bg-transparent border-non p-0 hover:bg-transparent hover:border-non">
              <img src={ClientxcmsLogo} alt="Share on Clientxcms" className="h-8 w-8"/>
            </Button>
          </div>
      </div>
    </div>
  );
}

export default App;
