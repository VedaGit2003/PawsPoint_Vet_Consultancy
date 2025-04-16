import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {

    const {roomid}=useParams()

    const meeting=async(element)=>{
        const appID = 1790110378;
      const serverSecret = "41188f497bbe4b1928c2e12202d29ce3";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,  Date.now().toString(),  "Veda");

       // Create instance object from Kit Token.
       const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomid,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton:true
      });
    }
  return (
    <>
    <div>Room</div>
    <h1>{roomid}</h1>
    <div>
        <div ref={meeting}></div>
    </div>
    </>
  )
}

export default Room