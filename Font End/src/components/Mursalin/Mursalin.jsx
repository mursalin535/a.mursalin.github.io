import React, { useEffect, useState } from "react";
import MursalinLoader from "./MursalinLoader";
import MursalinBG from "./MursalinBG";
import MursalinIntro from "./MursalinIntro";
import MursalinNav from "./MursalinNav";

function Mursalin() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <MursalinLoader />;

  return (
    <MursalinBG>
      <div className="relative flex min-h-dvh flex-col items-center w-full overflow-hidden">
        {/* Nav */}
        <div className=" w-full flex justify-center">
          <MursalinNav />
        </div>

        {/* Content */}
        <main className="flex flex-1 items-center justify-center px-4 pt-32">
          <MursalinIntro />
        </main>
      </div>
    </MursalinBG>
  );
}

export default Mursalin;
