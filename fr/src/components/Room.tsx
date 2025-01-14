import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const URL = "https://expenzo-bc.vercel.app";

interface RoomProps {
  name: string;
  localAudioTrack: MediaStreamTrack | null;
  localVideoTrack: MediaStreamTrack | null;
}

export const Room: React.FC<RoomProps> = ({ name, localAudioTrack, localVideoTrack }) => {
  const [lobby, setLobby] = useState<boolean>(true);
  const [sendingPc, setSendingPc] = useState<RTCPeerConnection | null>(null);
  const [receivingPc, setReceivingPc] = useState<RTCPeerConnection | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const socket = io(URL);

    const setupLocalVideo = (): void => {
      if (localVideoRef.current && localVideoTrack) {
        const stream = new MediaStream([localVideoTrack]);
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.play();
      }
    };

    const handleSendOffer = async ({ roomId }: { roomId: string }): Promise<void> => {
      console.log("Sending offer...");
      const pc = new RTCPeerConnection();
      setSendingPc(pc);

      if (localVideoTrack) pc.addTrack(localVideoTrack);
      if (localAudioTrack) pc.addTrack(localAudioTrack);

      pc.onicecandidate = (e) => {
        if (e.candidate) {
          socket.emit("add-ice-candidate", {
            candidate: e.candidate,
            type: "sender",
            roomId,
          });
        }
      };

      pc.onnegotiationneeded = async () => {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        socket.emit("offer", { sdp: offer, roomId });
      };
    };

    const handleReceiveOffer = async ({ roomId, sdp }: { roomId: string; sdp: RTCSessionDescriptionInit }): Promise<void> => {
      console.log("Received offer...");
      const pc = new RTCPeerConnection();
      setReceivingPc(pc);

      pc.ontrack = (event) => {
        const stream = new MediaStream();
        stream.addTrack(event.track);
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = stream;
        }
      };

      pc.onicecandidate = (e) => {
        if (e.candidate) {
          socket.emit("add-ice-candidate", {
            candidate: e.candidate,
            type: "receiver",
            roomId,
          });
        }
      };

      await pc.setRemoteDescription(new RTCSessionDescription(sdp));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      socket.emit("answer", { roomId, sdp: answer });
    };

    const handleAddIceCandidate = ({
      candidate,
      type,
    }: {
      candidate: RTCIceCandidateInit;
      type: "sender" | "receiver";
    }): void => {
      if (type === "sender" && receivingPc) {
        receivingPc.addIceCandidate(new RTCIceCandidate(candidate));
      } else if (type === "receiver" && sendingPc) {
        sendingPc.addIceCandidate(new RTCIceCandidate(candidate));
      }
    };

    // Socket Event Listeners
    socket.on("send-offer", handleSendOffer);
    socket.on("offer", handleReceiveOffer);
    socket.on("add-ice-candidate", handleAddIceCandidate);
    socket.on("lobby", () => setLobby(true));

    setupLocalVideo();

    return () => {
      socket.disconnect();
    };
  }, [localAudioTrack, localVideoTrack]);

  return (
    <div>
      <h1>Hi, {name}</h1>
      <video autoPlay width={400} height={400} ref={localVideoRef} />
      {lobby && <p>Waiting for connection...</p>}
      <video autoPlay width={400} height={400} ref={remoteVideoRef} />
    </div>
  );
};
