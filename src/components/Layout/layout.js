import React from "react";

const Layout = ({children}) => {
 return (
   <div className={'font-bold text-zinc-700'}>
     <div className={'h-12 w-full text-white bg-indigo-700 flex items-center pl-4'}>
       <h3>Music Streaming</h3>
         </div>
        {children}
     <div className={'h-12 w-full text-white bg-indigo-700 flex items-center pl-4'}>
       <h3>Browse and listen to music of your choice</h3>
     </div>
   </div>
);
};
export default Layout;