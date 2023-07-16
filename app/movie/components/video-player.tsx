"use client";

interface VideoPlayerProps {
  src: string;
  type: string;
}

const VideoPlayer = ({ src, type }: VideoPlayerProps) => {
  return (
    <div className='w-full flex justify-center'>
      <video className='w-full' controls src={src}>
        <span>Sorry, your browser doesn&rsquo;t support embedded videos.</span>
      </video>
    </div>
  );
};

export default VideoPlayer;
