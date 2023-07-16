import { NextResponse } from "next/server";

const dogsUrl = "https://dogs-api.nomadcoders.workers.dev";

interface DogsResponse {
  ok: boolean;
  data?: {
    url: string;
    isLiked: boolean;
  };
}
const GET = async () => {
  try {
    const data = await fetch(dogsUrl).then((res) => res.json());
    return NextResponse.json({ ok: true, data } as DogsResponse);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false } as DogsResponse);
  }
};
