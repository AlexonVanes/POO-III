import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import Youtube from "./platforms/Youtube";
import AdvancedLive from "./trasmissions/AdvancedLive";
import Live from "./trasmissions/Live";

function startLive(platform : IPlatform){
    console.log("Aguarde....");
    const live = new Live(platform);
    live.broadcastring();
    live.result();
}

function startAdvancedLive(platform : IPlatform){
    console.log("Aguarde....");
    const live = new AdvancedLive(platform);
    live.broadcastring();
    live.result();
    live.comments();
    live.subtitles();
}
startAdvancedLive(new Twitch());

startAdvancedLive(new Youtube());

startAdvancedLive(new Facebook());

