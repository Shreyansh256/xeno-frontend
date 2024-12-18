// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { auth, googleProvider } from "../utils/firebase";

// const Home: React.FC = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         router.push("/dashboard");
//       }
//     });
//     return () => unsubscribe();
//   }, [router]);

//   const signInWithGoogle = async () => {
//     try {
//       await googleProvider();
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("Error signing in with Google:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-12 ">
//       <div className="flex flex-col items-center mb-8">
//         <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mb-4">
//           <svg
//             width="70"
//             height="18"
//             viewBox="0 0 70 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.73845 8.82232L0.266214 0.810976H4.22988L7.9717 6.57144L11.7283 0.810976H15.6772L10.1754 8.82232L15.9582 17.2038H11.9797L7.9717 11.0584L3.94888 17.2038H0L5.73845 8.82232ZM25.3201 0.5C26.7794 0.5 28.0316 0.801104 29.0768 1.40331C30.1219 2.00552 30.9255 2.85947 31.4875 3.96516C32.0495 5.07085 32.3305 6.39371 32.3305 7.93382V9.79964H21.4008C21.4403 11.3891 21.8642 12.6133 22.6728 13.4721C23.4911 14.331 24.6349 14.7605 26.104 14.7605C27.1491 14.7605 28.0858 14.6617 28.9141 14.4643C29.7522 14.257 30.6149 13.9559 31.5023 13.561V16.3894C30.6839 16.7744 29.8507 17.0558 29.0028 17.2335C28.1548 17.4112 27.1393 17.5 25.9561 17.5C24.3489 17.5 22.934 17.189 21.7114 16.5671C20.4987 15.9352 19.5472 14.9974 18.857 13.7535C18.1767 12.5096 17.8365 10.9646 17.8365 9.11847C17.8365 7.28221 18.1471 5.72241 18.7683 4.43903C19.3894 3.15563 20.262 2.17828 21.3861 1.50697C22.5101 0.835657 23.8214 0.5 25.3201 0.5ZM25.3201 3.12108C24.2257 3.12108 23.3383 3.47649 22.658 4.18729C21.9875 4.89809 21.5931 5.93962 21.4748 7.31187H28.9289C28.919 6.49244 28.7809 5.76685 28.5147 5.13502C28.2584 4.5032 27.864 4.00959 27.3316 3.65419C26.809 3.29879 26.1385 3.12108 25.3201 3.12108ZM44.7835 0.5C46.6273 0.5 48.0617 0.978804 49.0873 1.93641C50.1229 2.88415 50.6402 4.40941 50.6402 6.51218V17.2038H47.1647V7.16379C47.1647 5.89023 46.9034 4.93758 46.3808 4.30575C45.8582 3.66406 45.0497 3.34321 43.9553 3.34321C42.3678 3.34321 41.2635 3.83189 40.6423 4.80924C40.0311 5.78658 39.7254 7.20327 39.7254 9.05926V17.2038H36.2498V0.810976H38.9563L39.4444 3.03223H39.6366C39.9916 2.45964 40.4304 1.99071 40.9529 1.62544C41.4854 1.25029 42.077 0.968931 42.7277 0.781359C43.3884 0.593786 44.0736 0.5 44.7835 0.5ZM70 8.9704C70 10.3328 69.8226 11.5421 69.4678 12.5984C69.113 13.6548 68.5951 14.5482 67.9148 15.2788C67.2345 15.9994 66.4162 16.5523 65.4595 16.9373C64.5032 17.3125 63.4238 17.5 62.2209 17.5C61.0968 17.5 60.0665 17.3125 59.1294 16.9373C58.1929 16.5523 57.3794 15.9994 56.6894 15.2788C56.0091 14.5482 55.4817 13.6548 55.1067 12.5984C54.7322 11.5421 54.5447 10.3328 54.5447 8.9704C54.5447 7.16379 54.8552 5.63355 55.4764 4.37979C56.1077 3.11615 57.0048 2.1536 58.1683 1.49216C59.3318 0.830721 60.717 0.5 62.3243 0.5C63.833 0.5 65.1638 0.830721 66.3177 1.49216C67.4711 2.1536 68.373 3.11615 69.024 4.37979C69.675 5.64347 70 7.17366 70 8.9704ZM58.1241 8.9704C58.1241 10.1649 58.2669 11.1867 58.553 12.0357C58.8487 12.8847 59.302 13.5363 59.9136 13.9904C60.5247 14.4347 61.3136 14.6568 62.28 14.6568C63.2459 14.6568 64.0349 14.4347 64.6465 13.9904C65.2575 13.5363 65.7061 12.8847 65.9922 12.0357C66.2782 11.1867 66.421 10.1649 66.421 8.9704C66.421 7.77583 66.2782 6.76395 65.9922 5.93466C65.7061 5.09553 65.2575 4.45877 64.6465 4.02439C64.0349 3.58014 63.2411 3.35802 62.2651 3.35802C60.8256 3.35802 59.7756 3.84176 59.115 4.80924C58.4544 5.77671 58.1241 7.16379 58.1241 8.9704Z"
//               fill="#fff"
//             />
//           </svg>
//         </div>
//         <h1 className="text-5xl font-bold text-gray-800 mb-4">
//           Welcome to Xeno Mini CRM
//         </h1>
//         <p className="text-lg text-gray-600 text-center max-w-md">
//           Xeno Mini CRM is your one-stop solution to manage and analyze your
//           customer relationships effectively. From creating targeted campaigns
//           to tracking your performance, Xeno Mini CRM helps you stay ahead.
//         </p>
//       </div>
//       <button
//         onClick={signInWithGoogle}
//         className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-md hover:bg-blue-600 transition-all"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default Home;







"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../utils/firebase";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await googleProvider();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800">
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <div className="inline-block bg-purple-600 rounded-full p-4 mb-6">
            {/* Replace with a new abstract logo */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {"/* Add your new logo SVG here */"}
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-100 mb-4 font-sans">
            Welcome to Xeno Mini CRM
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 max-w-md"
        >
          <p className="text-lg text-purple-700 dark:text-purple-200 mb-8 font-serif">
            Xeno Mini CRM is your one-stop solution to manage and analyze your
            customer relationships effectively. From creating targeted campaigns
            to tracking your performance, Xeno Mini CRM helps you stay ahead.
          </p>
          <button
            onClick={signInWithGoogle}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg text-lg shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Sign in with Google"
          >
            Sign in with Google
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;