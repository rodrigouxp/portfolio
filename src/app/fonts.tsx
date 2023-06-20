import { Space_Grotesk } from "next/font/google";
import { useServerInsertedHTML } from "next/navigation";

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space_grotesk",
  weight: ["400", "600", "700"],
  display: "swap",
});

// export default function Fonts() {
//   useServerInsertedHTML(() => {
//     return (
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
// 				:root {
// 					--space_grotesk: ${space_grotesk.style.fontFamily};
// 				}
// 			`,
//         }}
//       />
//     );
//   });

//   return null;
// }
